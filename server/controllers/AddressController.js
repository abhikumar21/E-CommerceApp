import AddressModel from "../models/addressModel.js";
import UserModel from "../models/userModel.js";


export const addAddress = async(req, res)=> {
    const user=req.user;
    const data = req.body;
    try {
        const newAddress = new AddressModel(data);
        newAddress.user = user;
        const result = await newAddress.save();

        const currentUser = await UserModel.findById(user._id)
        currentUser.address.push(newAddress);
        await currentUser.save();

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllAddresses=async(req, res)=> {
    const user = req.user;
    try {
        const address = await AddressModel.find({user: user._id})
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json(error);
    }
}