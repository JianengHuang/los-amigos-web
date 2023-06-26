import { CategoryInterface } from "../interfaces/CategoryInterface";
import Category from "../models/Category";
import Dish from "../models/Dish";
import { Request, Response } from "express";

export const addCategory = async (req: Request, res: Response) => {
  const { category } = req.body;
  if (!category || typeof category !== "string") {
    res.status(400).json({ error: "Incorrect Values" });
    return;
  }
  const filteredCategory = category.trim().toLowerCase();
  Category.findOne(
    { category: filteredCategory },
    async (err: Error, doc: CategoryInterface) => {
      if (err) throw err;
      // console.log(doc);
      if (doc) {
        res.status(400).json({ error: "Category already exists" });
        return;
      }
      if (!doc) {
        try {
          const newCategory = new Category({
            category: filteredCategory,
          });
          // console.log(newCategory);
          await newCategory.save();
          Category.findOne(
            { category: filteredCategory },
            (err: Error, doc: CategoryInterface) => {
              if (err) throw err;
              if (doc) {
                res.status(200).json({ category: doc });
              }
            }
          );
        } catch (err: any) {
          res.status(500).json({ error: err.message });
        }
      }
    }
  );
};

export const deleteCategory = async (req: Request, res: Response) => {
  const id = req.params.id;
  await Category.findByIdAndDelete(id, (err: Error) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Category deleted");
    }
  })
    .clone()
    .catch((err) => {
      console.error(err);
    });
};
