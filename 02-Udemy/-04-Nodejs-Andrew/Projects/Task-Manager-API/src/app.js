require("./db/mongoose");
const express = require("express");
const userRouter = require("./routers/User");
const taskRouter = require("./routers/Task");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
