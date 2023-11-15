const express = require("express");
const router = express.Router();
const loginController = require("../controllers/login");
const User = require("../models/users");
const { checkTokens } = require("../middlewares/auth");

//로그인
router.post(
  "/",
  //  checkTokens,
  loginController.postLogin
);
module.exports = router;
