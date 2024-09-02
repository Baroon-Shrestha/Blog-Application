import { User } from "../models/userModel.js"
import bcrypt from "bcrypt"

export const getUsers = async (req, res) => {
    const users = await User.find()

    res.send({
        success: true,
        users
    })
}
export const signup = async (req, res) => {

    const { username, email, password } = req.body

    if (!username || !email || !password) return res.send("you cannot leave any of these empty")

    const hashedPass = bcrypt.hashSync(password, 10)

    const newUser = await User.create({ username, email, password: hashedPass })

    console.log(newUser)

    res.send({
        success: true,
        newUser
    })
}

export const login = async (req, res) => {
    const { username, email, password } = req.body

    if (!email || !password) return res.send("you cannot leave any of these empty")

    const findUser = await User.findOne({ email })

    if (!findUser) return res.send("user not found")

    const pass = await bcrypt.compare(password, findUser.password)

    console.log(`${findUser.username} logged in`)

    res.send({
        success: true,
        message: "login success",
    })

}