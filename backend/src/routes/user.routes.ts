import express, { Request, Response } from 'express';
import User from '../models/User';
import { UserInterface } from '../interfaces/UserInterface';
import bcrypt from 'bcryptjs';
import { createUser } from '../controllers/user.controller';
import passport from 'passport';

const userRouter = express.Router();

userRouter.post('/register', createUser);

userRouter.post('/login', passport.authenticate('local'), (req, res) => {
    res.send('Succesfully Logged In');
});

userRouter.get('/user', (req: Request, res: Response) => {
  res.send(req.user);
});

// userRouter.post('/login', (req, res) => {
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//   });
//   res.send('Authenticated');
// });

// userRouter.post(
//   '/login',
//   passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true,
//   })
// );

export default userRouter;
