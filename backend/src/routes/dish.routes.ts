import express from "express";
import {
  createDish,
  editDish,
  deleteDish,
} from "../controllers/dish.controller";
import isAdministratorMiddleware from "../middlewares/isAdministratorMiddleware";
import Dish from "../models/Dish";
import { getAll } from "../controllers/global.controller";

const dishRouter = express.Router();

dishRouter.post("/createdish", createDish);

dishRouter.put("/editdish/:id", editDish);

dishRouter.get("/getall", getAll(Dish));

dishRouter.delete("/deletedish/:id", deleteDish);

export default dishRouter;
