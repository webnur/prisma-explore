import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.createCategory(req.body);
    res.send({
      success: true,
      message: "create a category successfully!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const CategoryController = {
  createCategory,
};
