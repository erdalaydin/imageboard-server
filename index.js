const express = require("express");
const Image = require("./image/model");
const app = express();
const imageRouter = require("./image/router");
const port = process.env.PORT || 4000;
const db = require("./db");

app.use(imageRouter);

app.listen(`${port}`, () => console.log(` Server already started at ${port}`));
