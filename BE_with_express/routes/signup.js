const express = require("express");
const router = express.Router();
const User = require("../models/users");

const signupController = require("../controllers/signup");
router.post("/", signupController.postSignup);
module.exports = router;
