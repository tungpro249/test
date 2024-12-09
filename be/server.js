const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
import "./config/connect";

const app = express();
app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

const todo = require("./routers/todo");
app.use("/api", todo);
app.listen(5000, function () {
  console.log("Example app listening on port 5000!");
});
