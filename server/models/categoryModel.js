import mongoose from 'mongoose'

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    level: {
        type: Number,
        required: true,
    }
})

const CategoryModel = mongoose.model('Category', CategorySchema)
export default CategoryModel