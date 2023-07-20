import { Request, Response } from "express";
import { DishInterface } from "../interfaces/DishInterface";
import Dish from "../models/Dish";
import filterStringsInArray from "../utils/filterStringsInArray";

export const createDish = async (req: Request, res: Response) => {
  const { id, name, ingredients, price, image, category } = req?.body;
  if (
    id === undefined ||
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
      res.status(409).json({ message: "Dish already exists" });
      return;
    }
    if (!doc) {
      const ingredientsNoDuplicates = [...new Set(ingredientsArray)];
      const allergensNoDuplicates = [...new Set(allergensArray)];
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
        // console.log("attempted to save new dish");
        Dish.findOne({ id }, (err: Error, doc: DishInterface) => {
          if (err) throw err;
          if (doc) {
            // console.log(doc);
            res.status(200).json({ ...doc._doc });
          }
        });
      } catch (err: any) {
        console.log(err);
        res.status(500).json({ message: err.message });
      }
    }
  });
};

export const editDish = async (req: Request, res: Response) => {
  console.log(req.body);
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
    res.status(400).json({ error: "Incorrect Values" });
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
      res.send("Dish deleted");
    }
  })
    .clone()
    .catch((err) => {
      console.error(err);
    });
};
