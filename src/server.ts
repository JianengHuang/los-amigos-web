import express from "express";
import { Request, Response } from "express";
import "dotenv/config";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World2!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
