import { Request, Response } from 'express';
import { UserInterface } from '../interfaces/UserInterface';
import User from '../models/User';
import bcrypt from 'bcryptjs';

export const createUser = async (req: Request, res: Response) => {
  let { email, password } = req?.body;
  if (email && typeof email === 'string') email = email.toLowerCase();
  if (
    !email ||
    !password ||
    typeof email !== 'string' ||
    typeof password !== 'string'
  ) {
    res.statusCode = 200;
    res.send('Valores no correctos');
    return;
  }
  User.findOne({ email }, async (err: Error, doc: UserInterface) => {
    if (err) throw err;
    if (doc) {
      res.statusCode = 200;
      res.send('Email ya existe');
      return;
    }
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10);
      try {
        const newUser = new User({
          email,
          password: hashedPassword,
        });
        await newUser.save();
        res.statusCode = 200;
        res.send('Usuario creado con exito');
      } catch (e) {
        res.statusCode = 200;
        res.send(`Error: ${e}`);
      }
    }
  });
};
