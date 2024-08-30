import mongoose, { connect, mongo } from "mongoose";

export const database = () => {

    mongoose.connect("mongodb+srv://bar00nshrestha098:Bl67u1WZyixtphKI@cluster0.0ri681o.mongodb.net/PetsNepal?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log("connection successfull")
        })
        .catch((err) => {
            console.log(err.message)
        })

}