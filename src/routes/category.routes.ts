import express from "express";
import {
  getCategories,
  createCategory,
  modifyCategory,
  deleteCategory,
} from "../controllers/category.controller";
import logger from "../middleware/logger";
import { checkIfCategoryAlreadyExists } from "../middleware/checkIfAlreadyExists";
import { checkIfCategoryKeysMissing } from "../middleware/checkIfKeysMissing";
import { checkIfCategoryIdExists } from "../middleware/checkIfIdExists";
import { checkIfCategoryValuesCorrect } from "../middleware/checkIfValuesCorrect";

const categoryRoutes = express.Router();

categoryRoutes.get("/", logger, getCategories);

categoryRoutes.post(
  "/",
  logger,
  checkIfCategoryKeysMissing,
  checkIfCategoryValuesCorrect,
  checkIfCategoryAlreadyExists,
  createCategory
);

categoryRoutes.put(
  "/:id",
  logger,
  checkIfCategoryIdExists,
  checkIfCategoryKeysMissing,
  checkIfCategoryValuesCorrect,
  modifyCategory
);

categoryRoutes.delete("/:id", logger, checkIfCategoryIdExists, deleteCategory);

export default categoryRoutes;
