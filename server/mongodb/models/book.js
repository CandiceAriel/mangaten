import mongoose from 'mongoose';

const BooksSchema = new mongoose.Schema(
  {
    productId: { type: String, required: true},
    picture: { type: String, required: true },
    title:  { type: String, required: true },
    price: { type: String, required: true },
    categoryId: { type: String, required: true, ref: 'Category' },
  }
)

const Book = mongoose.model('Books', BooksSchema);

export default Book;