const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
import dotenv from "dotenv";
dotenv.config();
import "./config/connect";

const app = express();
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

const todo = require("./routers/todo");
const user = require("./routers/user");

app.use("/api", todo);
app.use("/api", user);
app.listen(process.env.PORT || 5000, function () {
  console.log(`Example app listening on port ${process.env.PORT} !`);
});
