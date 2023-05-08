import mongoose from 'mongoose';

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
  allergens: [{
      type: String,
      required: true,
  }]
});

export default mongoose.model('Dish', dishSchema, 'menu');
