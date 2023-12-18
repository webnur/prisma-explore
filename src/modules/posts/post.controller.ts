import { Request, Response } from "express";
import { PostService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPost(req.body);
    res.send({
      success: true,
      message: "create a post successfully!!",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getPosts = async (req: Request, res: Response) => {
  console.log(req.query);
  const options = req.query;
  try {
    const result = await PostService.getPosts(options);
    res.send({
      success: true,
      message: "get all post successfully!!",
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.updatePost(
      parseInt(req.params.id),
      req.body
    );
    res.send({
      success: true,
      message: "updated post successfully!!",
      total: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.deletePost(parseInt(req.params.id));
    res.send({
      success: true,
      message: "delete post successfully!!",
      total: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const learnAggregateAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await PostService.learnAggregateAndGrouping();
    res.send({
      success: true,
      message: "learn aggregate and grouping!!",
      total: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
  learnAggregateAndGrouping,
};
