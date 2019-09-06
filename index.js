const express = require("express");
const Image = require("./image/model");
const app = express();
const imageRouter = require("./image/router");
const port = process.env.PORT || 4000;
const db = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const corsMiddleware = cors();
const parserMiddleware = bodyParser.json();
const router = require("./image/router");
const routerJwt = require("./auth/router");
const routerUser = require("./user/router");

app.use(corsMiddleware);
app.use(parserMiddleware);

app.use(imageRouter);
app.use(routerJwt);
app.use(routerUser);
app.use(router);

app.listen(`${port}`, () => console.log(` Server already started at ${port}`));
