import Express from "express";
import { addPost } from "../controllers/posts.js";

const router = Express.Router()

router.get("/addpost", addPost)

export default router