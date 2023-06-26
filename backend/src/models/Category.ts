import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    unique: true,
  },
});

export default mongoose.model("Category", categorySchema, "category");
