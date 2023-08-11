import express from "express";
import { getDishes, createDish } from "../controllers/dish.controller";
import logger from "../middleware/logger";

const dishRoutes = express.Router();

dishRoutes.get("/", logger, getDishes);

dishRoutes.post("/", logger, createDish);

export default dishRoutes;
