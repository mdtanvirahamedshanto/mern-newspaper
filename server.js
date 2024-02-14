const express = require("express");
const dotenv = require("dotenv");
const app = express();
const db_connect = require("./utils/db");

dotenv.config();

db_connect();
const port = process.env.port;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Server in Runing on port ${port}!`));
