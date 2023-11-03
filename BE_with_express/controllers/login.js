const dontenv = require("dotenv");
const express = require("express");
dontenv.config();
const jwt = require("jsonwebtoken");

const User = require("../models/users");
const Token = require("../models/token");
//const TokenController = require("../models/token");
const TokenController = require("../controllers/token");

exports.postLogin = async (req, res, next) => {
  try {
    const { nickname, password } = req.body;
    const discoverUser = await User.findOne({ nickname });
    if (!discoverUser || password !== discoverUser.password) {
      return res.status(400).json({
        errorMessage: "닉네임 또는 패스워드가 틀렸습니다.",
      });
    } else {
      const accessToken = jwt.sign(
        {
          userId: discoverUser.userId,
          nickname: discoverUser.nickname,
          password: discoverUser.password,
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: "1m",
          issuer: "About Tech",
        }
      );
      const refreshToken = jwt.sign(
        {
          userId: discoverUser.userId,
          nickname: nickname,
          password: password,
        },
        process.env.REFRESH_SECRET,
        {
          expiresIn: "24h",
          issuer: "About Tech",
        }
      );

      const setRefreshToken = await TokenController.updateRefresh({
        _id: discoverUser.userId,
        refreshToken,
      });

      res.cookie("refreshToken", refreshToken, {
        secure: false,
        httpOnly: true,
      });
      // res.cookie("accessToken", accessToken, {
      //   secure: false,
      //   httpOnly: true,
      // });
      //res.setHeader("Authorization", `Bearer ${accessToken}`);
      res.status(200).json({ message: "로그인 성공", accessToken });
      return { discoverUser, accessToken, refreshToken };
    }
  } catch (error) {
    res.status(500).json({ errorMessage: "서버 에러" });
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
  // 용도 : access token을 갱신.
  try {
    const token = req.cookies.refreshToken;
    const data = jwt.verify(token, process.env.REFRESH_SECRET);
    const userData = User.filter((item) => {
      return item.email === data.email;
    })[0];

    // access Token 새로 발급
    const accessToken = jwt.sign(
      {
        userId: userData.userId,
        username: userData.username,
        email: userData.email,
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