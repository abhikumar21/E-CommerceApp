import OrderModel from "../models/orderModel.js";
import OrderItemModel from "../models/orderItemModel.js";
import AddressModel from "../models/addressModel.js";
import CartItemModel from "../models/cartItemModel.js";


export const getOrder=async(req, res)=> {
    const orderId = req.params.id;
    try {
        const order = await OrderModel.findById(orderId);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const createOrder = async(req, res) => {
    const user = req.user;
    try {
        const order = new OrderModel(req.body);
        order.user = user;
        const result = await order.save();
        res.status(200).json(order);
        
    } catch (error) {
        res.status(500).json(error);
    }
}



export const addOrderedProducts = async (req, res) => {
    const { userId } = req.body;
    const orderId = req.params.id;

    try {
        const order = await OrderModel.findById(orderId);
        if (!order) {
            return res.status(400).json("Order not found");
        }

        let totalPrice = 0;
        let totalDiscountPrice = 0;

        const items = await CartItemModel.find({ userId: userId });
        for (let item of items) {
            let orderitem = new OrderItemModel({
                order: orderId, // Make sure this is an ObjectId, not an object
                product: item.product,
                size: item.size,
                quantity: item.quantity,
                price: item.price,
                discountPrice: item.price,
                user: userId,
            });

            await orderitem.save();

            order.orderItems.push(orderitem._id); // Push only the ObjectId
            totalPrice += orderitem.price;
            totalDiscountPrice += orderitem.discountPrice;
        }

        order.totalPrice = totalPrice;
        order.totalDiscountPrice = totalDiscountPrice;
        order.markModified("orderItems"); // Ensure Mongoose detects changes
        await order.save();

        // Populate orderItems before sending response
        const updatedOrder = await OrderModel.findById(orderId).populate("orderItems");

        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
};
