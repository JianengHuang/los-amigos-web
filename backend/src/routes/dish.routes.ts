import express from 'express';
import {
  createDish,
  editDish,
  deleteDish,
} from '../controllers/dish.controller';
import isAdministratorMiddleware from '../middlewares/isAdministratorMiddleware';
import Dish from '../models/Dish';
import { getAll } from '../controllers/global.controller';

const dishRouter = express.Router();

dishRouter.post('/createdish', isAdministratorMiddleware, createDish);

dishRouter.put('/editdish/:id', isAdministratorMiddleware, editDish);

dishRouter.get('/getall', getAll(Dish));

dishRouter.delete('/deletedish/:id', isAdministratorMiddleware, deleteDish);

export default dishRouter;
