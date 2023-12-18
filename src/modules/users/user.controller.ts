import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);
    res.send({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "profile  created/updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    res.send({
      success: true,
      message: "get all users successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(parseInt(req.params.id));
    res.send({
      success: true,
      message: "get single user successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  createUser,
  insertOrUpdateProfile,
  getUsers,
  getSingleUser,
};
