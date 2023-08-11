import db from "../db";
import { Request, Response } from "express";

export const getCategories = async (req: Request, res: Response) => {
  const response = await db.category.findMany();
  res.status(200).json({ categories: response });
};

export const createCategory = async (req: Request, res: Response) => {
  const { category, priority } = req.body;
  const response = await db.category.create({
    data: {
      category,
      priority,
    },
  });
  res.status(200).json({ category: response });
};
