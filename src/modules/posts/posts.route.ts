import express from "express";
import { PostController } from "./post.controller";
const router = express.Router();

router.post("/create-post", PostController.createPost);
router.get("/", PostController.getPosts);
router.patch("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);
router.get("/learn", PostController.learnAggregateAndGrouping);
export const PostsRoutes = router;
