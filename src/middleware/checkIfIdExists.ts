import { NextFunction, Request, Response } from "express";
import db from "../db";
import isObjectId from "../utils/isObjectId";

export const checkIfDishIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  if (!isObjectId(id))
    return res.status(400).json({ message: "Invalid object id" });
  const response = await db.dish.findFirst({
    where: {
      id,
    },
  });
  if (response) {
    next();
  } else {
    return res.status(400).json({
      message: `Dish with this |id| doesn't exist`,
    });
  }
};

export const checkIfCategoryIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  if (!isObjectId(id))
    return res.status(400).json({ message: "Invalid object id" });
  const response = await db.category.findFirst({
    where: {
      id,
    },
  });
  if (response) {
    next();
  } else {
    return res.status(400).json({
      message: `Dish with this |id| doesn't exist`,
    });
  }
};
