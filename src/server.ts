import express from "express";
import "dotenv/config";
import dishRoutes from "./routes/dish.routes";
import categoryRoutes from "./routes/category.routes";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json());

app.use("/dish", dishRoutes);

app.use("/category", categoryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
