import express from "express";
import {
  addCategory,
  deleteCategory,
} from "../controllers/category.controller";
import { getAll } from "../controllers/global.controller";
import Category from "../models/Category";

const categoryRouter = express.Router();

categoryRouter.post("/add", addCategory);

categoryRouter.get("/getall", getAll(Category));

categoryRouter.delete("/delete/:id", deleteCategory);

export default categoryRouter;
