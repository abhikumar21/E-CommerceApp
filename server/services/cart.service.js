import CartModel from '../models/cartModel.js'
import CartItemModel from '../models/cartItemModel.js';
import Product from '../models/productModel.js';


const findUserCart = async(userId)=> {
    try {
        const cart = await CartModel.find({userId});
        const cartItems = await CartItemModel.find({cart: cart._id}).populate("product");
        cart.cartItems = cartItems;

        let totalPrice = 0;
        let totalDiscountPrice=0;
        let totalItem=0;
        for(let cartItem of cart.cartItems) {
            totalPrice+=cartItem.price;
            totalDiscountPrice+=cartItem.totalDiscountPrice;
            totalItem+=cartItem.quantity;
        }
        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.totalDiscountPrice=totalPrice-totalDiscountPrice;

        return cart;

    } catch (error) {
        throw new Error(error.message);
    }
}

export const addCartItem= async(userId, req)=> {
    try {
        const cart = await CartModel.findOne({User: userId});
        const product = await Product.findById(req.productId);

        const isPresent = await CartItem.findOne({cart:cart._id, product:product._id, userId})
        
    } catch (error) {
        
    }
}