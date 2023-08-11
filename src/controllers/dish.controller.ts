import db from "../db";
import { Request, Response } from "express";

export const getDishes = async (req: Request, res: Response) => {
  const response = await db.dish.findMany();
  res.status(200).json({ dishes: response });
};

export const createDish = async (req: Request, res: Response) => {
  const {
    dishId,
    name,
    ingredients,
    price,
    priority,
    image,
    description,
    category,
    allergens,
    isRecommended,
    mightContain,
  } = req.body;
  const response = await db.dish.create({
    data: {
      dishId,
      name,
      ingredients,
      price,
      priority,
      image,
      description,
      category,
      allergens,
      isRecommended,
      mightContain,
    },
  });
  res.status(200).json({ dish: response });
};
