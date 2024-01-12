// middlewares/auth-middleware.js
const dontenv = require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const Token = require("../models/token");
const { makeAccessToken, makeRefreshToken } = require("../utils/token");
// case1: access token과 refresh token 모두가 만료된 경우 -> 에러 발생
// case2: access token은 만료됐지만, refresh token은 유효한 경우 ->  access token 재발급
// case3: access token은 유효하지만, refresh token은 만료된 경우 ->  refresh token 재발급
// case4: accesss token과 refresh token 모두가 유효한 경우 -> 바로 다음 미들웨어로 넘긴다.

module.exports = {
  async checkTokens(req, res, next) {
    const headernull = req.headers["authorization"].split(" ")[1];
    console.log(headernull, "headernull");
    console.log(typeof headernull, "headernull");
    if (
      req.headers["authorization"] === undefined ||
      req.headers["authorization"].split(" ")[1] === "null" ||
      req.headers["authorization"].split(" ")[1] === "undefined"
    ) {
      console.log("사용권한없음");
      return res.status(401).json({
        ok: false,
        error: "API 사용 권한이 없습니다. 로그인 후 이용바랍니다.",
      });
    } else if (
      !(req.headers["authorization"] == "undefined") &&
      !(req.headers["authorization"].split(" ")[1] === "null")
    ) {
      console.log("header", req.headers["authorization"].split(" ")[1] == null);
      const reqAccess = req.headers.authorization.split(" ")[1];
      const accessToken = verify(reqAccess);
      const decodedAccess = jwt.decode(reqAccess);
      if (accessToken === false && decodedAccess.ok == false) {
        const reqRefresh = req.cookies.refreshToken;
        const refreshToken = refreshVerify(reqRefresh); // *실제로는 DB 조회
        const decodedRefresh = jwt.decode(reqRefresh);
        const { userId, nickname } = decodedRefresh;
        const reUserId = decodedRefresh.userId;
        const compareUserId = await User.findOne({ userId });
        const { _id } = compareUserId;
        const DbRefreshToken = await Token.findOne({ _id });
        if (
          reqRefresh === undefined &&
          !DbRefreshToken.refreshToken === reqRefresh
        ) {
          // case1: access token과 refresh token 모두가 만료된 경우
          return res.status(401).json({
            ok: false,
            error: "API 사용 권한이 없습니다. 로그인 후 이용바랍니다.",
          });
        } else if (
          decodedAccess.message == "jwt expired" &&
          DbRefreshToken === compareUserId._id
        ) {
          // case2: access token은 만료됐지만, refresh token은 유효한 경우
          /**
           *  DB를 조회해서 payload에 담을 값들을 가져오는 로직
           */
          const newAccessToken = makeAccessToken({
            userId: decodedRefresh.userId,
            nickname: decodedRefresh.nickname,
          });
          res.status(200).json({
            ok: true,
            data: {
              accessToken: newAccessToken,
            },
          });
          next();
        }
      } else {
        const reqRefresh = req.cookies.refreshToken;
        const refreshToken = refreshVerify(reqRefresh); // *실제로는 DB 조회
        const decodedRefresh = jwt.decode(reqRefresh);
        if (refreshToken === undefined) {
          // case3: access token은 유효하지만, refresh token은 만료된 경우
          const newRefreshToken = makeRefreshToken({
            userId: decodedAccess.userId,
            nickname: decodedAccess.nickname,
          });
          const setRefreshToken = await TokenController.updateRefresh({
            _id: DbRefreshToken._id,
            refreshToken,
          });
          res.cookie("refreshToken", newRefreshToken, {
            secure: false,
            httpOnly: true,
          });
          req.cookies.refreshToken = newRefreshToken;
          next();
        } else {
          // case4: accesss token과 refresh token 모두가 유효한 경우
          next();
        }
      }
    } else {
      console.log("예상치못한 에러가 발생했습니다. ");
      return res.status(401).json({
        ok: false,
        error: "API 사용 권한이 없습니다. 로그인 후 이용바랍니다.",
      });
    }
  },
};
const { ACCESS_SECRET, REFRESH_SECRET } = process.env;
// refresh token 유효성 검사
const refreshVerify = async (token) => {
  try {
    // db에서 refresh token 가져오기

    if (token && token !== undefined && token !== null) {
      try {
        jwt.verify(token, REFRESH_SECRET);
        return true;
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
};
const verify = async (token) => {
  try {
    if (token !== undefined) {
      const decoded = jwt.verify(token, ACCESS_SECRET);
      try {
        return {
          ok: true,
          userId: decoded.userId,
          nickname: decoded.nickname,
        };
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    return {
      ok: false,
      message: error.message,
    };
  }
};
