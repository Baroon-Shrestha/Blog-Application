import app from "./app.js";


const PORT = 3000 || 4000

app.listen((req, res) => {
    console.log(`listening on ${process.env.PORT}`)
})