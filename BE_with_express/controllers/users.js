const express = require("express");
const router = express.Router();

// 내 정보 조회 API
exports.getMypage = async (req, res) => {
  const { email, nickname } = res.locals.user;

  res.status(200).json({
    user: { email, nickname },
  });
};
