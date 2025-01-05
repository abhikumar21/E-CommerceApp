import mongoose from "mongoose";

const productSchema = new mongoose({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "This is the best in the market"
    },
    ImageUrls: [{
        type: String,
    }],
    price: {
        type: Number,
        default: 0
    },
    discountPrice: {
        type: Number,
        // required: true,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    brand: {
        type: String,
    },
    sizes: [{
        name: {type: String},
        quantity: {type: Number},
    }],
    color: {
        type: String,
        default: "Red",
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    ratings:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rating",
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    numRatings: {
        type: Number,
        default: 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    }
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);
export default Product;