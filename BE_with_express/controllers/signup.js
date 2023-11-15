const express = require("express");
const User = require("../models/users");

// 회원가입 API
exports.postSignup = async (req, res) => {
  const { email, nickname, password, confirmPassword, userId } = req.body;

  if (password !== confirmPassword) {
    res.status(400).json({
      message: "패스워드가 패스워드확인란과 다릅니다.",
    });
    return;
  }
  //동일데이터 확인 중복 user 거르기
  const existsUsers = await User.findOne({
    $or: [{ email }, { nickname }, { userId }],
  });

  if (existsUsers) {
    res.status(400).json({
      message: "이메일 또는 닉네임이 이미 사용중입니다.",
    });
    return;
  }

  const user = new User({ email, nickname, password, userId });
  await user.save();
  res.status(201).json({});
};
