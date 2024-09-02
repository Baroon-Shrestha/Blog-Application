import express from "express";
import { signup, login, getUsers } from "../controllers/users.js";

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.get("/allusers", getUsers)


export default router;