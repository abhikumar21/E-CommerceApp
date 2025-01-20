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

const findUserCart = async(req, res)=> {
    // const userId
    try {
        const cart = await CartModel.find({userId});
        const cartItems = await CartItemModel.find({cart: cart._id}).populate("product");
        cart.cartItems = cartItems;

        let totalPrice = 0;
        if(cart) {
            res.status(200).json({cart});

        }
        else{
            res.status(400).json("Cart not found")
        }
    } catch (error) {
        res.status(500).json(error);
    }
}