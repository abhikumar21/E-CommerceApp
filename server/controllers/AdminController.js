import Product from "../models/productModel.js"
// import jwt from 'jsonwebtoken';


export const createProductItem = async(req, res)=> {
    try {
        if(req.body) {
            const product = new Product(req.body);
            await product.save();
            res.status(200).json("Product Item Created");
        }
        else{
            res.status(400).json("No userData found");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}