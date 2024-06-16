import db from "../db";
import { Request, Response } from "express";

export const getDishes = async (req: Request, res: Response) => {
  const response = await db.dish.findMany({
    orderBy: { priority: "asc" },
  });
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

export const modifyDish = async (req: Request, res: Response) => {
  const id = req.params.id;
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
  const response = await db.dish.update({
    where: { id },
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

export const deleteDish = async (req: Request, res: Response) => {
  const id = req.params.id;
  const response = await db.dish.delete({ where: { id } });
  res.status(200).json({ dish: response });
};
