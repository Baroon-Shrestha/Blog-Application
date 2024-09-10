import mongoose from "mongoose";


export const database = () => {

    const mongodb_uri = process.env.MONGODB_URI

    mongoose.connect(mongodb_uri)
        .then(() => {
            console.log("connection successfull")
        })
        .catch((err) => {
            // console.log(err.message)
        })

}