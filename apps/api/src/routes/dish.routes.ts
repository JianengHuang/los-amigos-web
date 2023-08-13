import express from "express";
import {
  getDishes,
  createDish,
  modifyDish,
  deleteDish,
} from "../controllers/dish.controller";
import { checkIfDishKeysMissing } from "../middleware/checkIfKeysMissing";
import { checkIfDishValuesCorrect } from "../middleware/checkIfValuesCorrect";
import { checkIfDishAlreadyExists } from "../middleware/checkIfAlreadyExists";
import { checkIfDishIdExists } from "../middleware/checkIfIdExists";

const dishRoutes = express.Router();

dishRoutes.get("/", getDishes);

dishRoutes.post(
  "/",
  checkIfDishKeysMissing,
  checkIfDishValuesCorrect,
  checkIfDishAlreadyExists,
  createDish
);

dishRoutes.put("/:id", checkIfDishIdExists, modifyDish);

dishRoutes.delete("/:id", checkIfDishIdExists, deleteDish);

export default dishRoutes;
