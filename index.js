const express = require("express");
const model = require("./image/model");
const app = express();

const port = process.env.PORT || 4000;
const db = require("./db");

app.listen(`${port}`, () => console.log(` Server already started at ${port}`));
