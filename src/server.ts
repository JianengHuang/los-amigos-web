import express from "express";
import "dotenv/config";
import dishRoutes from "./routes/dish.routes";

const app = express();

app.use(express.json());

app.use("/dish", dishRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
