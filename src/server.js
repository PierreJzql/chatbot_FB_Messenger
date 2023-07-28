import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import routes from "./routes/webhook"

dotenv.config()

const app = express();
const port = parseInt(process.env.PORT)||3000

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("",routes)


app.listen(port, () => {
    console.log((`Server running on port : ${port}`))
})