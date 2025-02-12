import OrderModel from "../models/orderModel.js";
import OrderItemModel from "../models/orderItemModel.js";
import AddressModel from "../models/addressModel.js";

export const createOrder = async(req, res) => {
    const user = req.user;
    const {deliveryDate, shippingAddress, paymentDetails, totalPrice, totalDiscountPrice} = req.body;
    try {
        const order = new OrderModel({
            user: user._id,
            deliveryDate,
            shippingAddress, 
            totalPrice,
            totalDiscountPrice,
        });
        const res = await order.save();
        res.status(200).json({message: `order saved, ${order}`});
        
    } catch (error) {
        res.status(500).json(error);
    }
}

export const addOrderedProducts = async(req, res) => {
    const user = req.user;
    const orderId = req.params.id;
    try {
        const order = await OrderModel.findById(orderId);
        if(!order) {
            res.status(400).json("Order not found")
        }
        const items = await OrderItemModel.find({order: orderId, user: user._id})
        order.orderItems = items.map((item)=> item._id);
        await order.save();
        res.status(200).json({message: `this is your products and order, ${order}`})
    } catch (error) {
        res.status(500).json(error);
    }
}