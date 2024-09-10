import { Post } from "../models/postModel.js"

export const addPost = async (req, res) => {
    const { title, content } = req.body

    const postedContent = await Post.create({ title, content })

    res.send({
        success: true,
        postedContent
    })
}