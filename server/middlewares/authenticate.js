// 2:10:29 => 4 
import { getUserIdFromToken } from '../config/jwtProvider.js';
import UserModel from '../models/userModel.js';

export const authenticate = async(req, res, next) => {
    // Bearer, Token
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) {
            return res.status(404).send({error:"token not found"})
        }
        const userId = getUserIdFromToken(token);
        const user = await UserModel.findById(userId);
        req.user = user;
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
    next();
}