import express from "express";
import "dotenv/config";
import dishRoutes from "./routes/dish.routes";
import categoryRoutes from "./routes/category.routes";

const app = express();

app.use(express.json());

app.use("/dish", dishRoutes);

app.use("/category", categoryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
