import { NextFunction, Request, Response } from "express";
import db from "../db";

export const checkIfIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
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
