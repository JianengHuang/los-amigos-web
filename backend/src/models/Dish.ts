import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  allergens: [
    {
      type: Number,
      required: true,
    },
  ],
  isRecommended: {
    type: Boolean,
    required: true,
  },
  mightContain: [
    {
      type: Number,
    }
  ]
});

export default mongoose.model("Dish", dishSchema, "carta");
