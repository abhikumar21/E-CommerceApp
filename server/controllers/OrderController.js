import OrderModel from "../models/orderModel.js";
import OrderItemModel from "../models/orderItemModel.js";
import AddressModel from "../models/addressModel.js";

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


export const createOrderItems = async(req, res) => {
    const orderId = req.params.id;
    try {
        
    } catch (error) {
        
    }
}


export const addOrderedProducts = async(req, res) => {
    // const user = req.user;
    // const userId = req.body;
    const orderId = req.params.id;
    try {
        const order = await OrderModel.findById(orderId);
        if(!order) {
            res.status(400).json("Order not found")
        }
        const items = await OrderItemModel.find({order: orderId})
        order.orderItems = items;
        await order.save();
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
}