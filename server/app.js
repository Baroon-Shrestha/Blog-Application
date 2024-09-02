import express from "express";
import { database } from "./database/database.js";
import dotenv from "dotenv"
import userRoutes from "./routes/userroutes.js"

const app = express()

app.use(express.json())

dotenv.config("./.env")

app.use("/blogspot", userRoutes)

export default app

database()