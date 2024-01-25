const express = require("express");

exports.postLogout = async (req, res) => {
  try {
    res.cookie("accessToken", " ");
    res.status(200).json({ message: "로그아웃되었습니다." });
  } catch (err) {
    res.status(500).json({ message: "로그아웃 중 오류가 발생했습니다." });
  }
};
