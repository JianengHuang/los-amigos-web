import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes";
import dishRoutes from "./routes/dish.routes";
import db from "./db";
import passport from "passport";
import passportConfig from "./config/passport-config";

dotenv.config();
// Connection to DB
db();

// Middleware
const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors({ origin: "http://localhost:3000", credentials: false }));
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "secret",
//     resave: true,
//     saveUninitialized: true,
//   })
// );
// app.use(cookieParser());
// app.use(passport.initialize());
// app.use(passport.session());

// Passport
passportConfig();

// Routes
// app.use("/user", userRoutes);
app.use("/dish", dishRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server started in port: " + process.env.PORT);
});
