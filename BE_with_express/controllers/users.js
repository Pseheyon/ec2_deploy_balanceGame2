const express = require("express");
const router = express.Router();

exports.getMypage = async (req, res) => {
  const { email, nickname } = res.locals.user;

  res.status(200).json({
    user: { email, nickname },
  });
};
