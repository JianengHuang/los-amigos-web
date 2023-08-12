import { NextFunction, Request, Response } from "express";

export const checkIfDishValuesCorrect = async (
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
  let message = "";
  let everythingIsCorrect = true;

  typeof dishId !== "number"
    ? ((message += "dishId | "), (everythingIsCorrect = false))
    : null;
  typeof name !== "string"
    ? ((message += "name | "), (everythingIsCorrect = false))
    : null;
  !Array.isArray(ingredients) ||
  !ingredients.every((ingredient) => typeof ingredient === "string")
    ? ((message += "ingredients | "), (everythingIsCorrect = false))
    : null;
  typeof price !== "number"
    ? ((message += "price | "), (everythingIsCorrect = false))
    : null;
  typeof priority !== "number"
    ? ((message += "priority | "), (everythingIsCorrect = false))
    : null;
  typeof image !== "string"
    ? ((message += "image | "), (everythingIsCorrect = false))
    : null;
  typeof description !== "string"
    ? ((message += "description | "), (everythingIsCorrect = false))
    : null;
  typeof category !== "string"
    ? ((message += "category | "), (everythingIsCorrect = false))
    : null;
  !Array.isArray(allergens) ||
  !allergens.every((allergen) => Number.isInteger(allergen))
    ? ((message += "allergens | "), (everythingIsCorrect = false))
    : null;
  typeof isRecommended !== "boolean"
    ? ((message += "isRecommended | "), (everythingIsCorrect = false))
    : null;
  !Array.isArray(mightContain) ||
  !mightContain.every((item) => Number.isInteger(item))
    ? ((message += "mightContain | "), (everythingIsCorrect = false))
    : null;

  if (!everythingIsCorrect) {
    return res.status(400).json({
      message: `Incorrect values: ${message}`,
    });
  } else {
    next();
  }
};
