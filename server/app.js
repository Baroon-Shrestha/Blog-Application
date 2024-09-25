import express from "express";
import { database } from "./database/database.js";
import dotenv from "dotenv"
import userRoutes from "./routes/userroutes.js"
import postRoutes from "./routes/postRoutes.js"
import commentRoutes from "./routes/commentRoutes.js"
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors"
import { globalErrorHandling } from "./middlewares/globalErrorHandler.js";

const app = express()

app.use(cors({
    origin: "*"
}))
app.use(express.json())

dotenv.config("./.env")


app.use("/blogspot", userRoutes)
app.use("/blogspot", postRoutes)
app.use("/blogspot", commentRoutes)

database()

app.use(globalErrorHandling)

export default app