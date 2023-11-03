const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

// 내 정보 조회 API
router.get("/", userController.getMypage);
module.exports = router;
