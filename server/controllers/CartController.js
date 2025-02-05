import CartModel from '../models/cartModel.js'
import CartItemModel from '../models/cartItemModel.js';
import Product from '../models/productModel.js';



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
        const cart = await CartModel.findOne({user: user._id});
        if(cart) {
            const cartItems = await CartItemModel.find({cart: cart._id}).populate("product");
            cart.cartItems = cartItems;
    
            let totalPrice = 0;
            let totalDiscountPrice=0;
            let totalItem=0;
            for(let cartItem of cart.cartItems) {
                totalPrice+=cartItem.price;
                totalDiscountPrice+=cartItem.discountPrice;
                totalItem+=cartItem.quantity;
            }
            cart.totalPrice = totalPrice;
            cart.totalItem = totalItem;
            cart.totalDiscountPrice=totalDiscountPrice;

            res.status(200).json(cart);
        }
        else{
            res.status(400).json("Cart not found")
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const addToCart= async(req, res)=> {
    const user = req.user;
    const productId = req.params.id;
    const {size} = req.body;
    // const product = await Product.findById(productId);
    try {
        const cart = await CartModel.findOne({user: user._id});
        const product = await Product.findById(productId);  
        const isPresent = await CartItemModel.findOne({cart: cart._id, product: productId});

        if(!isPresent) {
            const cartItems = new CartItemModel({
                cart: cart._id,
                product: productId,
                size,
                quantity: 1,
                price: product.price,
                discountPrice: product.discountPrice,
                userId: user._id
            })
            const createdCartItem = await cartItems.save();
            cart.cartItems.push(createdCartItem);
            await cart.save();

            res.status(200).json(cart);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}