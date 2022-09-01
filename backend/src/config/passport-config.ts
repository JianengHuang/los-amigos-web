import passport from 'passport';
import passportLocal from 'passport-local';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import { DBUserInterface, UserInterface } from '../interfaces/UserInterface';

const LocalStrategy = passportLocal.Strategy;

const initialize = () => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      User.findOne({ email: email }, (err: any, user: any) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(
          password,
          user.password,
          (err: any, isMatch: boolean) => {
            if (err) throw err;
            if (isMatch) return done(null, user);
            else {
              return done(null, false);
            }
          }
        );
      });
    })
  );

  passport.serializeUser((user: any, cb) => {
    cb(null, user._id);
  });

  passport.deserializeUser((id: string, cb) => {
    User.findOne({ _id: id }, (err: any, user: any) => {
      const userInformation = {
        email: user.email,
        isAdmin: user.isAdmin,
      };
      cb(err, userInformation);
    });
  });
};

export default initialize;
