import CartModel from '../models/cartModel.js'
import CartItemModel from '../models/cartItemModel.js';



export const createCart = async(req, res)=>{
    const newCart = new CartModel(req.body);
    try {
        const cart = await newCart.save();
        res.status(200).json({cart});
    } catch (error) {
        res.status(500).json(error);
    } 
}

export const findUserCart = async(req, res)=> {
    const user = req.user;
    try {
        const cart = await CartModel.find(user._id);
        if(cart) {
            const cartItems = await CartItemModel.find({cart: cart._id}).populate("Product");
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
            
            res.status(200).json(cart);
        }
        else{
            res.status(400).json("Cart not found")
        }
    } catch (error) {
        res.status(500).json(error);
    }
}