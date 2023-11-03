// middlewares/auth-middleware.js
const dontenv = require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const Token = require("../models/token");

// case1: access token과 refresh token 모두가 만료된 경우 -> 에러 발생
// case2: access token은 만료됐지만, refresh token은 유효한 경우 ->  access token 재발급
// case3: access token은 유효하지만, refresh token은 만료된 경우 ->  refresh token 재발급
// case4: accesss token과 refresh token 모두가 유효한 경우 -> 바로 다음 미들웨어로 넘긴다.

const TokenDb = require("../models/token");
module.exports = {
  async checkTokens(req, res, next) {
    try {
      const token = req.headers["authorization"].split(" ")[1];
      const refreshToken = req.cookies.refreshToken;
      const [, accessToken] = authorizationHeader.split(" ");

      if (!token) {
        throw new Error("API 사용 권한이 없습니다.");
      }

      if (!refreshToken) {
        throw new Error("Refresh 토큰이 없습니다.");
      }
      // access token 검증 -> expired여야 함.
      const authResult = verify(token);

      // access token을 디코딩하여 userId를 가져옵니다.
      const decoded = jwt.decode(token);

      if (!decoded) {
        res.status(401).send({
          ok: false,
          message: "권한 없음!",
        });
      }

      const refreshResult = await refreshVerify(refreshToken, decoded.userId);

      // access token이 만료되었는지 확인합니다.
      if (authResult.ok === false && authResult.message === "jwt expired") {
        // access token이 만료되었고, refresh token도 만료된 경우
        if (refreshResult === false) {
          res.status(401).send({
            ok: false,
            message: "권한 없음! 다시 로그인이 필요합니다.",
          });
        } else {
          // access token이 만료되었고, refresh token은 유효한 경우
          // 새로운 access token을 발급하고 클라이언트에 반환
          const newAccessToken = makeToken({ userId: decoded.userId });

          res.status(200).send({
            ok: true,
            data: {
              accessToken: newAccessToken,
              refreshToken,
            },
          });
        }
      } else {
        // access token이 만료되지 않은 경우
        res.status(400).send({
          ok: false,
          message: "Access token은 만료되지 않았습니다.",
        });
      }
    } catch (error) {
      res.status(401).json({ message: "인증 오류" });
    }
  },
};

// access token 유효성 검사
const verify = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    return {
      ok: true,
      userId: decoded.userId,
    };
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
};

// refresh token 유효성 검사
const refreshVerify = async (token, userId) => {
  try {
    // db에서 refresh token 가져오기
    const { refreshToken } = await Token.findToken(userId);
    if (token === refreshToken) {
      try {
        jwt.verify(token, process.env.REFRESH_SECRET);
        return true;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};
