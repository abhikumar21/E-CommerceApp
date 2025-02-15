import mongoose from "mongoose";

const OrderItemSchema = mongoose.Schema({
    order:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        // required: true,
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        // required: true,
    },
    size: {
        type: String,
    },
    quantity: {
        type: String,
        // required: true,
    },
    price: {
        type: Number,
        // required: true,
    },
    discountPrice: {
        type: Number,
        // required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true,
    }
}, {timestamps: true})

const OrderItemModel = mongoose.model('OrderItem', OrderItemSchema)
export default OrderItemModel