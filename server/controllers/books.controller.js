import Books from "../mongodb/models/book.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllBooks = async (req, res) => {
  try {
    const books = await Books.find({}).limit(req.query._end);

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBooksByID = async (req, res) => {
  const { id } = req.params;
    const bookExists = await Books.findOne({ _id: id }).populate(
      "creator",
    );

  if (bookExists) {
    res.status(200).json(bookExists);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};

export { 
  getAllBooks,
  getBooksByID
};