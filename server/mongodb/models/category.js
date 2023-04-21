import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    categoryId: { type: String, required: true },
    categoryCode: { type: String, required: true },
    categoryName: { type: String, required: true }
  }
)

const Category = mongoose.model('Categories', CategorySchema);

export default Category;