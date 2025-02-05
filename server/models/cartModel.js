import mongoose from 'mongoose'

const CartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CartItem',
        required: true,
    }],
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    totalItem: {
        type: Number,
        required: true,
        default: 0,
    }, 
    totalDiscountPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    discount: {
        type: Number,
        required: true,
        default: 0,
    }
})

const CartModel = mongoose.model("Cart", CartSchema);
export default CartModel;