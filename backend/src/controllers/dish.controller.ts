import { Request, Response } from 'express';
import { DishInterface } from '../interfaces/DishInterface';
import Dish from '../models/Dish';

export const createDish = async (req: Request, res: Response) => {
  const { name, ingredients, price, image, category } = req?.body;
  if (
    !name ||
    !ingredients ||
    !price ||
    !image ||
    !category ||
    typeof name !== 'string' ||
    typeof ingredients !== 'object' ||
    typeof price !== 'number' ||
    typeof image !== 'string' ||
    typeof category !== 'string'
  ) {
    console.log(
      req.body,
      !name,
      !ingredients,
      !price,
      !image,
      !category,
      typeof name !== 'string',
      typeof ingredients !== 'object',
      typeof price !== 'number',
      typeof image !== 'string',
      typeof category !== 'string'
    );
    res.status(400).json({ error: 'Incorrect Values' });
    return;
  }
  Dish.findOne({ name }, async (err: Error, doc: DishInterface) => {
    if (err) throw err;
    if (doc) {
      res.status(400).json({ error: 'Dish already exists' });
      return;
    }
    if (!doc) {
      try {
        const newDish = new Dish({
          name,
          ingredients,
          price,
          image,
          category,
        });
        await newDish.save();
        res.status(200).json({ message: 'Dish created' });
      } catch (e: any) {
        res.status(500).json({ error: e.message });
      }
    }
  });
};
