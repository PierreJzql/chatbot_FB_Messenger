import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import routes from "./routes/webhook.js"

dotenv.config();

const app = express();
const port = parseInt(process.env.PORT) || 3000;

app.use(express.static("./src/views/"));

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", routes);


app.listen(port, () => {
    console.log((`Server running on port : ${port}`))
});