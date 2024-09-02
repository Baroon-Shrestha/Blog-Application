import express from "express";
import { database } from "./database/database.js";
import dotenv from "dotenv"
import userRoutes from "./routes/userroutes.js"
import postRoutes from "./routes/postRoutes.js"
import commentRoutes from "./routes/commentRoutes.js"


const app = express()

app.use(express.json())

dotenv.config("./.env")

app.use("/blogspot", userRoutes)
app.use("/blogspot", postRoutes)
app.use("/blogspot", commentRoutes)

export default app

database()