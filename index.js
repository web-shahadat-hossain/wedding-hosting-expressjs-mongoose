const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

// mongoose
mongoose.connect(process.env.DATABASE).then(() => {
  console.log(`mongoose connect ${process.env.DATABASE} `);
});
// server
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
