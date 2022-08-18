import mongoose from 'mongoose';

const db = () => {
  try {
    mongoose.connect(
      'mongodb+srv://Huang:Doudou2010@cluster0.lvvoq.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('Connected To Mongo');
  } catch (e) {
    console.error(e);
  }
};

export default db;
