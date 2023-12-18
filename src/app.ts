import express, { Application } from "express";
import cors from "cors";
import { log } from "console";
import { UserRoutes } from "./modules/users/user.route";
import { CategoryRoute } from "./modules/category/category.route";
import { PostsRoutes } from "./modules/posts/posts.route";
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/categories", CategoryRoute);
app.use("/api/v1/posts", PostsRoutes);

export default app;
