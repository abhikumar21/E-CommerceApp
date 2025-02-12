import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
    },
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
    }],
    deliveryDate: {
        type: Date,        
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },
    paymentDetails: {
        paymentMethod: {
            type: String,
        },
        TransactionId: {
            type: String,
        },
        paymentId: {
            type: String,
        },
        paymentStatus: {
            type: String,
            default: "PENDING",
        }
    },
    totalPrice: {
        type: Number,
    },
    totalDiscountPrice: {
        type: Number,
    }
    
}, {timestamps: true})

const OrderModel = mongoose.model('Order', OrderSchema)
export default OrderModel