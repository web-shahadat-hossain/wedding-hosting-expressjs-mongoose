const express = require("express");
const app = express();
var cors = require("cors");
const { default: mongoose } = require("mongoose");

//middleware
app.use(cors());
app.use(express.json());

const services = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please Provide Services Name"],
  },
  space: {
    type: Number,
    required: true,
  },
  food: {
    type: String,
    required: true,
    enum: ["Low Food", "High Food", "All Food"],
  },
  budget: {
    type: Number,
    required: true,
  },
});

module.exports = app;
