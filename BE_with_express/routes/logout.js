const express = require("express");
const router = express.Router();
const logoutController = require("../controllers/logout");
const User = require("../models/users");

router.post("/", logoutController.postLogout);

module.exports = router;
