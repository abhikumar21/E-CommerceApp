import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        gender:{
            type: String,
            default: "Not Specified",
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: "CUSTOMER"
        },
        avatarUrl: {
            type: String,
        },
        mobile: {
            type: String,
        },
        address: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Address"
            }
        ],
        paymentInformation: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Payment_information"
            }
        ],
        ratings: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Rating"
            }
        ],
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Review"
            }
        ],

    }, {timestamps: true}
)

const UserModel = mongoose.model("User", UserSchema)
export default UserModel;