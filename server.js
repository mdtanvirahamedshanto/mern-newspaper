const express = require("express");
const dotenv = require("dotenv");
const body_parser = require("body-parser");
const app = express();
const db_connect = require("./utils/db");
const cors = require("cors");

dotenv.config();

app.use(body_parser.json());

if (process.env.mode === "production") {
  app.use(cors());
} else {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}

app.use("/", require("./routes/authRoutes"));
app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.port;
db_connect().then(() => {
  app.listen(port, () => console.log(`Server in Runing on port ${port}!`));
});
