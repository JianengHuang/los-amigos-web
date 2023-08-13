import express from "express";
import {
  getCategories,
  createCategory,
  modifyCategory,
  deleteCategory,
} from "../controllers/category.controller";
import { checkIfCategoryAlreadyExists } from "../middleware/checkIfAlreadyExists";
import { checkIfCategoryKeysMissing } from "../middleware/checkIfKeysMissing";
import { checkIfCategoryIdExists } from "../middleware/checkIfIdExists";
import { checkIfCategoryValuesCorrect } from "../middleware/checkIfValuesCorrect";

const categoryRoutes = express.Router();

categoryRoutes.get("/", getCategories);

categoryRoutes.post(
  "/",
  checkIfCategoryKeysMissing,
  checkIfCategoryValuesCorrect,
  checkIfCategoryAlreadyExists,
  createCategory
);

categoryRoutes.put(
  "/:id",
  checkIfCategoryIdExists,
  checkIfCategoryKeysMissing,
  checkIfCategoryValuesCorrect,
  modifyCategory
);

categoryRoutes.delete("/:id", checkIfCategoryIdExists, deleteCategory);

export default categoryRoutes;
