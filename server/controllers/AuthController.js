import { generateToken } from "../config/jwtProvider.js";
import UserModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';


export const registerUser = async(req, res)=> {
    
    const newUser = new UserModel(req.body);
    const {email} = req.body;
    try {
        const oldUser = await UserModel.findOne({email});
        if(oldUser) {
            console.log(oldUser);
            return res.status(400).json({message: "User already exists"});
        }
        else{
           const user = await newUser.save();
           const token = await generateToken(user);
        res.status(200).json({user, token});
        }
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const loginUser = async(req, res) => {
    const {email, password} = req.body;
    try {
        const oldUser = await UserModel.findOne({email});
        if(oldUser) {
            if(password === oldUser.password) {
                const token = await generateToken(oldUser)
                res.status(200).json({oldUser, token});
            }
            else{
                res.status(400).json({message: "Incorrect Password"});
            }
        }
        else{
            res.status(404).json({message: "User does not exist"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}