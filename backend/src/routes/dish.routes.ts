import express from 'express';
import { createDish } from '../controllers/dish.controller';
import isAdministratorMiddleware from '../middlewares/isAdministratorMiddleware';
import Dish from '../models/Dish';
import { getAll } from '../controllers/global.controller';

const dishRouter = express.Router();

dishRouter.post('/createdish', isAdministratorMiddleware, createDish);

dishRouter.get('/getall', isAdministratorMiddleware, getAll(Dish));

export default dishRouter;
