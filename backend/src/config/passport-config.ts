import passport from 'passport';
import passportLocal from 'passport-local';
import User from '../models/User';
import bcrypt from 'bcryptjs';

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
    cb(null, user.id);
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

// passport.use(
//   'local',
//   new LocalStrategy(
//     {
//       usernameField: 'email',
//       passwordField: 'password',
//       passReqToCallback: true,
//     },
//     async (req, email, password, done) => {
//       const user = new User();
//       user.email = email;
//       user.password = password;
//       await user.save();
//       done(null, user);
//     }
//   )
// );

//   passport.use(
//     'local',
//     new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//       User.findOne({ email }, (err: any, user: any) => {
//         if (err) throw err;
//         if (!user) return done(null, false);
//         bcrypt.compare(
//           password,
//           user.password,
//           (err: any, isMatch: boolean) => {
//             if (err) throw err;
//             if (isMatch) return done(null, user);
//             else {
//               return done(null, false);
//             }
//           }
//         );
//       });
//     })
//   );

//   passport.serializeUser((user: any, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser(async (id: any, done) => {
//     const user = await User.findById(id);
//     done(null, user);
//   });

// User.findOne({ email }, (err, user) => {
//     if (err) {
//         return done(err);
//     }
//     if (!user) {
//         return done(null, false, { message: 'Incorrect email' });
//     }
//     if (!bcrypt.compareSync(password, user.password)) {
//         return done(null, false, { message: 'Incorrect password' });
//     }
//     return done(null, user);
// }).select('+password');
