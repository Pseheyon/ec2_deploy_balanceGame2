const dontenv = require("dotenv");
const express = require("express");
dontenv.config();
const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken(token) {
    try {
      return jwt.verify(token, process.env.REFRESH_SECRET);
    } catch (e) {
      //다음과 같은 형태로 특정 에러에 대해서 핸들링해줄 수 있다.
      //아래 코드에선 유효기간이 만료된 코드에 대해서 null을 리턴
      if (e.name === "TokenExpiredError") {
        return null;
      }

      return null;
    }
  },
};

// access token 유효성 검사
const verify = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_KEY);
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
    const { refreshToken } = await TokenModel.findToken(userId);
    if (token === refreshToken) {
      try {
        jwt.verify(token, JWT_KEY);
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
