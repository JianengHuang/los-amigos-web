import express from "express";
import {
  getCategories,
  createCategory,
} from "../controllers/category.controller";
import logger from "../middleware/logger";

const categoryRoutes = express.Router();

categoryRoutes.get("/", logger, getCategories);

categoryRoutes.post("/", logger, createCategory);

export default categoryRoutes;
