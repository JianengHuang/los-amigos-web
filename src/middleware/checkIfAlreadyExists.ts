import { NextFunction, Request, Response } from "express";
import db from "../db";

export const checkIfDishAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { dishId, name } = req.body;
  const response = await db.dish.findFirst({
    where: {
      OR: [{ dishId }, { name }],
    },
  });
  console.log(response);
  if (response) {
    let message;
    if (response.dishId === dishId && response.name === name) {
      message = "|dishId| and |name|";
    } else if (response.dishId === dishId) {
      message = "|dishId|";
    } else if (response.name === name) {
      message = "|name|";
    }
    return res.status(400).json({
      message: `Dish with this ${message} already exists`,
    });
  } else {
    next();
  }
};
