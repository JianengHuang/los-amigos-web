import express from "express";
import dotenv from "dotenv";
import dishRoutes from "./routes/dish.routes";
import categoryRoutes from "./routes/category.routes";
import cors from "cors";

dotenv.config({ path: "../../../.env" });

const app = express();

app.use(cors());

app.use(express.json());

app.use("/dish", dishRoutes);

app.use("/category", categoryRoutes);

app.listen(process.env.API_PORT, () => {
  console.log(`Server started on port ${process.env.API_PORT}`);
});
