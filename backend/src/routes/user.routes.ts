import express, { Request, Response } from 'express';
import { createUser } from '../controllers/user.controller';
import passport from 'passport';
import emailToLowerCase from '../middlewares/emailToLowerCase';
import { UserInterface } from '../interfaces/UserInterface';
import User from '../models/User';
import isAdministratorMiddleware from '../middlewares/isAdministratorMiddleware';

const userRouter = express.Router();

userRouter.post('/register', createUser);

userRouter.post(
  '/login',
  emailToLowerCase,
  passport.authenticate('local'),
  (req, res) => {
    // if (req.body.remember) {
    //   req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
    // } else {
    //   //@ts-ignore
    //   req.session.cookie.expires = false; // Cookie expires at end of session
    // }
    res.send('Succesfully Logged In');
  }
);

userRouter.get('/user', (req: Request, res: Response) => {
  res.send(req.user);
});

userRouter.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    } else {
      res.send('Logged out');
    }
  });
});

userRouter.delete(
  '/deleteuser/:id',
  isAdministratorMiddleware,
  async (req: Request, res: Response) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id, (err: Error) => {
      if (err) {
        res.send(err);
      } else {
        res.send('User deleted');
      }
    })
      .clone()
      .catch((err) => {
        console.error(err);
      });
  }
);

userRouter.get('/getallusers', isAdministratorMiddleware, async (req, res) => {
  await User.find({}, (err: Error, data: UserInterface[]) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
    .clone()
    .catch((err) => {
      console.error(err);
    });
});

export default userRouter;
