import { Router } from "express";
import { createPost } from "../controllers/post.controller.js";

const postRouter = Router();
postRouter.route('/create').post(createPost)
export default postRouter;