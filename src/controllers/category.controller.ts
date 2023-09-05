import db from "../db";
import { Request, Response } from "express";

export const getCategories = async (req: Request, res: Response) => {
  const response = await db.category.findMany({
    orderBy: {
      priority: "asc",
    },
  });
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

export const modifyCategory = async (req: Request, res: Response) => {
  const { category, priority } = req.body;
  const { id } = req.params;
  const response = await db.category.update({
    where: { id },
    data: {
      category,
      priority,
    },
  });
  res.status(200).json({ category: response });
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await db.category.delete({
    where: { id },
  });
  res.status(200).json({ category: response });
};

export const createManyCategories = async (req: Request, res: Response) => {
  const { categories } = req.body;
  const response = await db.category.createMany({
    data: categories,
  });
  res.status(200).json({ categories: response });
};

export const deleteAllCategories = async (req: Request, res: Response) => {
  const response = await db.category.deleteMany();
  res.status(200).json({ categories: response });
};
