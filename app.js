const express = require("express");
const app = express();
var cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

module.exports = app;
