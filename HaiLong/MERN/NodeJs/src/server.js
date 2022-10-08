import express from "express";
import "dotenv/config";
import { connectDB, getDB } from "./config/connectDB";
import { createNew } from './models/board.model';
import apiRoutes from './routes/api';
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

connectDB()
    .then(() => {
        runApp();
    }).catch(err => {
        console.log(err);
    })

const runApp = () => {

    app.get("/", async (req, res) => {
        res.send("hello world with node.js")
    })

    apiRoutes(app);

    // connection();

    app.listen(port, () => {
        console.log("Node js server is running on the port :" + port)
    })
}

