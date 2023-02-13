import { Request, Response } from 'express';
import { DishInterface } from '../interfaces/DishInterface';
import Dish from '../models/Dish';
import isJson from '../utils/isJson';
import stringToArray from '../utils/stringToArray';

export const createDish = async (req: Request, res: Response) => {
  const { id, name, ingredients, price, image, category, allergens } =
    req?.body;
  if (
    id === undefined ||
    !name ||
    !ingredients ||
    !price ||
    !image ||
    !category ||
    !allergens ||
    typeof id !== 'number' ||
    typeof name !== 'string' ||
    typeof ingredients !== 'string' ||
    typeof price !== 'number' ||
    typeof image !== 'string' ||
    typeof category !== 'string' ||
    typeof allergens !== 'string'
  ) {
    res.status(422).json({ error: 'Incorrect Values' });
    return;
  }
  const ingredientsArray = stringToArray(ingredients);
  const allergensArray = stringToArray(allergens);
  if (ingredientsArray.length === 0 || allergensArray.length === 0) {
    res.status(422).json({ error: 'Incomplete / Missing Values' });
    return;
  }
  Dish.findOne({ id }, async (err: Error, doc: DishInterface) => {
    if (err) throw err;
    if (doc) {
      res.status(400).json({ error: 'Dish already exists' });
      return;
    }
    if (!doc) {
      const ingredientsNoDuplicates = [...new Set(ingredientsArray)];
      const allergensNoDuplicates = [...new Set(allergensArray)];
      try {
        const newDish = new Dish({
          id,
          name,
          ingredients: ingredientsNoDuplicates,
          price,
          image,
          category,
          allergens: allergensNoDuplicates,
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
  const { id, name, ingredients, price, image, category, allergens } =
    req?.body;
  const ingredientsArray = stringToArray(ingredients);
  const allergensArray = stringToArray(allergens);
  if (
    !id ||
    !name ||
    !ingredients ||
    !price ||
    !image ||
    !category ||
    typeof id !== 'number' ||
    typeof name !== 'string' ||
    ingredientsArray.length === 0 ||
    typeof price !== 'number' ||
    typeof image !== 'string' ||
    typeof category !== 'string' ||
    allergensArray.length === 0
  ) {
    res.status(400).json({ error: 'Incorrect Values' });
    return;
  }
  const ingredientsNoDuplicates = [...new Set(ingredientsArray)];
  const allergensNoDuplicates = [...new Set(allergensArray)];
  Dish.findByIdAndUpdate(
    _id,
    {
      id,
      name,
      ingredients: ingredientsNoDuplicates,
      price,
      image,
      category,
      allergens: allergensNoDuplicates,
    },
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
