import express, { Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import db from './services/db';
import passport from 'passport';
import passportConfig from './config/passport-config';

dotenv.config();
// Connection to DB
db();

// Middleware
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(
  session({
    secret: 'process.env.SESSION_SECRET',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

// Passport
passportConfig();

// Routes
app.use('/', userRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server started in port: ' + process.env.PORT);
});
