import mongoose from "mongoose";

const AddressSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        streetAddress: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipCode: {
            type: number,
            required: true
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        mobile: {
            type: String,
            required: true 
        }

    }
)

const AddressModel = mongoose.model("Address", AddressSchema);
export default AddressModel;