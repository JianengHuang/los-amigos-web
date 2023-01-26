import { Request, Response } from 'express';
import { DishInterface } from '../interfaces/DishInterface';
import Dish from '../models/Dish';

export const createDish = async (req: Request, res: Response) => {
  const { id, name, ingredients, price, image, category } = req?.body;
  if (
    !id ||
    !name ||
    !ingredients ||
    !price ||
    !image ||
    !category ||
    typeof id !== 'number' ||
    typeof name !== 'string' ||
    ingredients.length === 0 ||
    typeof price !== 'number' ||
    typeof image !== 'string' ||
    typeof category !== 'string'
  ) {
    res.status(400).json({ error: 'Incorrect Values' });
    return;
  }
  Dish.findOne({ id }, async (err: Error, doc: DishInterface) => {
    if (err) throw err;
    if (doc) {
      res.status(400).json({ error: 'Dish already exists' });
      return;
    }
    if (!doc) {
      try {
        const newDish = new Dish({
          id,
          name,
          ingredients,
          price,
          image,
          category,
        });
        await newDish.save();
        res.status(200).json({ message: 'Dish created' });
      } catch (err: any) {
        res.status(500).json({ error: err.message });
      }
    }
  });
};

export const editDish = async (req: Request, res: Response) => {
  const _id = req.params.id;
  const { id, name, ingredients, price, image, category } = req?.body;
  if (
    !id ||
    !name ||
    !ingredients ||
    !price ||
    !image ||
    !category ||
    typeof id !== 'number' ||
    typeof name !== 'string' ||
    ingredients.length === 0 ||
    typeof price !== 'number' ||
    typeof image !== 'string' ||
    typeof category !== 'string'
  ) {
    res.status(400).json({ error: 'Incorrect Values' });
    return;
  }
  Dish.findByIdAndUpdate(
    _id,
    { id, name, ingredients, price, image, category },
    async (err: Error, doc: DishInterface) => {
      if (err) throw err;
      if (doc) {
        res.status(200).json({ message: 'Dish edited' });
      }
    }
  );
};

export const deleteDish = async (req: Request, res: Response) => {
  const id = req.params.id;
  await Dish.findByIdAndDelete(id, (err: Error) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Dish deleted');
    }
  })
    .clone()
    .catch((err) => {
      console.error(err);
    });
};
