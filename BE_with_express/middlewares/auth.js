const dontenv = require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const Token = require("../models/token");
const { makeAccessToken, makeRefreshToken } = require("../utils/token");

module.exports = {
  async checkTokens(req, res, next) {
    const headernull = req.headers["authorization"].split(" ")[1];
    if (
      req.headers["authorization"] === undefined ||
      req.headers["authorization"].split(" ")[1] === "null" ||
      req.headers["authorization"].split(" ")[1] === "undefined"
    ) {
      throw new Error("API 사용 권한이 없습니다. 로그인 후 이용바랍니다.");
    } else if (
      !(req.headers["authorization"] == "undefined") &&
      !(req.headers["authorization"].split(" ")[1] === "null")
    ) {
      const reqAccess = req.headers.authorization.split(" ")[1];
      const accessToken = verify(reqAccess);
      const decodedAccess = jwt.decode(reqAccess);
      if (accessToken === false && decodedAccess.ok == false) {
        const reqRefresh = req.cookies.refreshToken;
        const refreshToken = refreshVerify(reqRefresh);
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
          throw Error("API 사용 권한이 없습니다.");
        } else if (
          decodedAccess.message == "jwt expired" &&
          DbRefreshToken === compareUserId._id
        ) {
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
        const refreshToken = refreshVerify(reqRefresh);
        const decodedRefresh = jwt.decode(reqRefresh);
        if (refreshToken === undefined) {
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
          next();
        }
      }
    } else {
      console.log("예상치못한 에러가 발생했습니다. ");
      throw new Error("API 사용 권한이 없습니다. 로그인 후 이용바랍니다.");
    }
  },
};
const { ACCESS_SECRET, REFRESH_SECRET } = process.env;

const refreshVerify = async (token) => {
  try {
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
