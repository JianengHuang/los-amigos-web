import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db = () => {
  try {
    mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/restaurant'
    );
    if (process.env.MONGODB_URI) {
      console.log('Connected To Mongo');
    } else {
      console.log('Connected To Local Mongo');
    }
  } catch (e) {
    console.error(e);
  }
};

export default db;
