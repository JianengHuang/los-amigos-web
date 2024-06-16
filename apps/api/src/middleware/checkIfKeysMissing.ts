import { NextFunction, Request, Response } from "express";

export const checkIfDishKeysMissing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

  // Check which keys are missing

  if (
    dishId === undefined ||
    name === undefined ||
    ingredients === undefined ||
    price === undefined ||
    priority === undefined ||
    image === undefined ||
    description === undefined ||
    category === undefined ||
    allergens === undefined ||
    isRecommended === undefined ||
    mightContain === undefined
  ) {
    // construct missing keys message
    const message = `Missing keys: ${dishId === undefined ? "dishId | " : ""}${
      name === undefined ? "name | " : ""
    }${ingredients === undefined ? "ingredients | " : ""}${
      price === undefined ? "price | " : ""
    }${priority === undefined ? "priority | " : ""}${
      image === undefined ? "image | " : ""
    }${description === undefined ? "description | " : ""}${
      category === undefined ? "category | " : ""
    }${allergens === undefined ? "allergens | " : ""}${
      isRecommended === undefined ? "isRecommended | " : ""
    }${mightContain === undefined ? "mightContain | " : ""}`;

    return res.status(400).json({
      message: message,
    });
  }
  next();
};

export const checkIfCategoryKeysMissing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category, priority } = req.body;
  let message;
  // Check which keys are missing
  if (category === undefined || priority === undefined) {
    if (category === undefined && priority === undefined) {
      message = "| category | priority |";
    } else if (category === undefined) {
      message = "| category |";
    } else if (priority === undefined) {
      message = "| priority |";
    }
    return res.status(400).json({
      message: `Missing keys: ${message}`,
    });
  } else {
    next();
  }
};
