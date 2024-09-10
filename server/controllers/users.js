import { asyncErrorHandling } from "../middlewares/asyncErrorHandling.js"
import { errorHandler } from "../middlewares/errorHandler.js"
import { User } from "../models/userModel.js"
import bcrypt from "bcrypt"

export const getUsers = asyncErrorHandling(async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users
    });
})


export const signup = asyncErrorHandling(async (req, res, next) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) return next(errorHandler(400, "you cannot leave any of these empty"))

    const hashedPass = bcrypt.hashSync(password, 10)

    const newUser = await User.create({ username, email, password: hashedPass })

    res.status(201).json({
        success: true,
        newUser
    })
})

export const login = asyncErrorHandling(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) return next(errorHandler(400, "you cannot leave any of these empty"))

    const findUser = await User.findOne({ email })

    if (!findUser) return next(errorHandler(400, "user not found"))

    const pass = await bcrypt.compare(password, findUser.password)

    res.status(200).json({
        success: true,
        message: "login success",
    })
})