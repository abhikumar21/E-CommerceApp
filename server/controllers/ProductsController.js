import Product from "../models/productModel.js";

export const getProductDetails = async(req, res) => {
    const productId = req.params.id;
    try {
        const result = await Product.findById(productId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAdminProducts = async(req, res) => {
    const userId = req.params.id;
    try {
        let posts = await Product.find({adminId: userId});
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getCategoryProduct = async(req, res) => {
    const {topLevelCategory, secondLevelCategory, thirdLevelCategory} = req.query;
    try {
        let posts = await Product.find({topLevelCategory, secondLevelCategory, thirdLevelCategory})
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
}

// export const convertSmall = async(req, res) => {
//     try {    
//         const res = await Product.updateMany({}, [
//             { $set: { 
//                 color: {$toLower: "$color"},
//                 topLevelCategory: { $toLower: "$topLevelCategory" },
//                 secondLevelCategory: { $toLower: "$secondLevelCategory" },
//                 thirdLevelCategory: { $toLower: "$thirdLevelCategory" }
//             }}
//         ]);
//         res.status(200).json("changed");
//     } catch (error) {
//         res.status(500).json(error);
//     }
// }