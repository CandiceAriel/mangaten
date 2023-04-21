import Categories from "../mongodb/models/category.js"

import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.find({}).limit(req.query._end);

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategoriesByID = async (req, res) => {
  const { id } = req.params;
    const categoryExists = await Categories.findOne({ _id: id }).populate(
      "creator",
    );

  if (categoryExists) {
    res.status(200).json(categoryExists);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};

export { 
  getAllCategories,
  getCategoriesByID
};