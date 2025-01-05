import UserModel from "../models/userModel";
import jwt from 'jsonwebtoken'

export const getAllUsers = async(req, res) => {
    try {
        const users = await UserModel.find();
        users = users.map((user)=> {
            const {password, ...otherDetails} = user._doc;
            return otherDetails;
        })
        res.status(200).json(otherDetails);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getUserById = async(req, res) => {
    const userId = req.params.id;
    try {

        const user = await UserModel.findById(userId);
        if(user) {
            const {password, ...otherDetails} = user._doc;
            res.status(200).json(otherDetails);
        }
        else {
            res.status(404).json("User not found in database");
        }
    } catch (error) {
        res.stauts(500).json(error);
    }
}


export const updataUser = async(req, res) => {
    const userId = req.params.id;
    const newData = req.body;
    try {
        const databaseUser = await UserModel.findByIdAndUpdate(userId, newData, new: true);
        if(databaseUser) {
            res.status(200).json(databaseUser);
        }
        else(
            res.status(404).json("User not found in database")
        )
    } catch (error) {
        res.status(500).json(error);
    }
}