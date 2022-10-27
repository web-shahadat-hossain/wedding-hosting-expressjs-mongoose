const express = require("express");
const app = express();
var cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

const servicesRouter = require("./Routers/services.router");

app.use("/app/v1/service", servicesRouter);

module.exports = app;
