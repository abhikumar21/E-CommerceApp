import CartModel from '../models/cartModel.js'
import CartItemModel from '../models/cartItemModel.js';
import Product from '../models/productModel.js';


export const createCart= async(user)=> {
    try {
        const cart = new CartModel({user});
        const createdCart = await cart.save();
        return createdCart;
    } catch (error) {
        throw new Error(error.message);
    }
}


export const findUserCart = async(userId)=> {
    try {
        const cart = await CartModel.find({userId});
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

        return cart;

    } catch (error) {
        throw new Error(error.message);
    }
}

export const addCartItem= async(userId, req)=> {
    try {
        const cart = await CartModel.findOne({user: userId});
        const product = await Product.findById(req.productId);

        const isPresent = await CartItem.findOne({cart:cart._id, product:product._id, userId})
        if(!isPresent) {
            const Item = new CartItemModel({
                product: product._id,
                cart:cart._id,
                quantity:1,
                userId,
                price:product.price,
                size:req.size,
                discountPrice:product.discountPrice,
            });
            const createdItem = await Item.save();
            cart.CartItemModel.push(createdItem)
            const res = await cart.save()
            return "Item added to cart";
        }
        else{
            return "Product already in cart";
        }
    } catch (error) {
        throw new Error(error.message);
    }
}


