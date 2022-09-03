import express, { Request, Response } from 'express';
import { createDish } from '../controllers/dish.controller';

const dishRouter = express.Router();

dishRouter.post('/createdish', createDish);

export default dishRouter;
