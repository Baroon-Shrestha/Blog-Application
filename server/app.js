import express from "express";
import { database } from "./database/database.js";
import dotenv from "dotenv"

const app = express()

dotenv.config("./.env")

export default app

database()