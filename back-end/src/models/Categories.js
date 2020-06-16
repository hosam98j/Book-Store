import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
  name: String,
});

export default mongoose.model("categories", categoriesSchema, "categories");
