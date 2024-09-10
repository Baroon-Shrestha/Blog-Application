import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        requried: true
    },
    // content: {
    //     type: String,
    //     requried: true
    // }
}, { timestamps: true })

export const Post = mongoose.model("Post", postSchema)