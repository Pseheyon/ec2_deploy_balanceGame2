const dontenv = require("dotenv");
const express = require("express");
dontenv.config();
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const Token = require("../models/token");
const { makeAccessToken, makeRefreshToken } = require("../utils/token");
const TokenController = require("../controllers/token");

exports.postLogin = async (req, res, next) => {
  try {
    const { userId, password } = req.body;
    const discoverUser = await User.findOne({ userId });

    if (!discoverUser) {
      return res.status(404).json({
        errorMessage: "사용자를 찾을 수 없습니다.",
      });
    }

    if (password !== discoverUser.password) {
      return res.status(400).json({
        errorMessage: "닉네임 또는 패스워드가 틀렸습니다.",
      });
    }

    const accessToken = makeAccessToken({
      userId: discoverUser.userId,
      nickname: discoverUser.nickname,
    });

    const refreshToken = makeRefreshToken({
      userId: discoverUser.userId,
      nickname: discoverUser.nickname,
    });

    const setRefreshToken = await TokenController.updateRefresh({
      _id: discoverUser._id,
      refreshToken,
    });

    res.cookie("refreshToken", refreshToken, {
      secure: false,
      httpOnly: false,
    });

    res.status(200).json({
      nickname: discoverUser.nickname,
      message: `로그인 성공${JSON.stringify(discoverUser.nickname)}`,
      accessToken,
    });

    return { discoverUser, accessToken, refreshToken };
  } catch (error) {
    res.status(500).json({ errorMessage: `${error}` });
  }
};

const accessToken = (req, res) => {
  try {
    const token = req.cookies.accessToken;
    const data = jwt.verify(token, process.env.ACCESS_SECRET);

    const userData = User.findOne({ email });

    const { password, ...others } = userData;

    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

const refreshToken = (req, res) => {
  try {
    const token = req.cookies.refreshToken;
    const data = jwt.verify(token, process.env.REFRESH_SECRET);
    const userData = User.filter((item) => {
      return item.email === data.email;
    })[0];

    const accessToken = jwt.sign(
      {
        userId: userData.userId,
        username: userData.username,
      },
      process.env.ACCESS_SECRET,
      {
        expiresIn: "1m",
        issuer: "About Tech",
      }
    );

    res.cookie("accessToken", accessToken, {
      secure: false,
      httpOnly: true,
    });

    res.status(200).json("Access Token Recreated");
  } catch (error) {
    res.status(500).json(error);
  }
};
