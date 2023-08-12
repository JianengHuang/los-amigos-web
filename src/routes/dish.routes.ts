import express from "express";
import {
  getDishes,
  createDish,
  modifyDish,
  deleteDish,
} from "../controllers/dish.controller";
import logger from "../middleware/logger";
import { checkIfDishKeysMissing } from "../middleware/checkIfKeysMissing";
import { checkIfDishValuesCorrect } from "../middleware/checkIfValuesCorrect";
import { checkIfDishAlreadyExists } from "../middleware/checkIfAlreadyExists";
import { checkIfDishIdExists } from "../middleware/checkIfIdExists";

const dishRoutes = express.Router();

dishRoutes.get("/", logger, getDishes);

dishRoutes.post(
  "/",
  logger,
  checkIfDishKeysMissing,
  checkIfDishValuesCorrect,
  checkIfDishAlreadyExists,
  createDish
);

dishRoutes.put("/:id", logger, checkIfDishIdExists, modifyDish);

dishRoutes.delete("/:id", logger, checkIfDishIdExists, deleteDish);

export default dishRoutes;
