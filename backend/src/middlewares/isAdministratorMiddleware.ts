import { Response, Request, NextFunction } from 'express';
import { UserInterface } from '../interfaces/UserInterface';
import User from '../models/User';

const isAdministratorMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user }: any = req;
  if (user) {
    User.findOne({ email: user.email }, (err: Error, doc: UserInterface) => {
      console.log(doc);
      if (err) {
        res.send(err);
      } else {
        if (doc?.isAdmin) {
          next();
        } else {
          res.send('Only administrators can perform this action');
        }
      }
    });
  } else {
    res.send('No user found');
  }
};

export default isAdministratorMiddleware;
