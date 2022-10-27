const express = require("express");
const { getService } = require("../Controllers/service.controller");

const router = express.Router();

router.route("/").post(getService);

module.exports = router;
