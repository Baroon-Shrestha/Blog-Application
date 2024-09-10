import Express from "express";
import { addPost } from "../controllers/posts.js";

const router = Express.Router()

router.post("/addpost", addPost)

export default router