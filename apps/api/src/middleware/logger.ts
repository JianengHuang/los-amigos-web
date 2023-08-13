import { NextFunction, Request, Response } from "express";

const logger = async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.path)
  console.log(req.body);
  next();
};

export default logger;
