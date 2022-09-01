import { Request, Response, NextFunction } from 'express';

const emailToLowerCase = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.email) {
    req.body.email = req.body.email.toLowerCase();
    next();
  }
};

export default emailToLowerCase;
