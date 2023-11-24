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
    /**
     * access token 자체가 없는 경우엔 에러(401)를 반환
     * 클라이언트측에선 401을 응답받으면 로그인 페이지로 이동시킴
     */
    if (req.headers["authorization"].split(" ")[1] === undefined)
      throw Error("API 사용 권한이 없습니다. 로그인 후 이용바랍니다.");

    // const token = req.headers["authorization"].split(" ")[1];
    const reqAccess = req.headers["authorization"].split(" ")[1];
    const reqRefresh = req.cookies.refreshToken;
    const accessToken = verify(reqAccess);

    const decodedAccess = jwt.decode(reqAccess);
    const decodedRefresh = jwt.decode(reqRefresh);

    const { userId, nickname } = decodedAccess;

    const compareUserId = await User.findOne({ userId });
    const { _id } = compareUserId;

    const refreshToken = refreshVerify(reqRefresh); // *실제로는 DB 조회
    const DbRefreshToken = await Token.findOne({ _id });

    if (accessToken === false) {
      if (
        refreshToken === undefined &&
        !DbRefreshToken.refreshToken === reqRefresh
      ) {
        // case1: access token과 refresh token 모두가 만료된 경우
        throw Error("API 사용 권한이 없습니다.");
      } else {
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
      if (refreshToken === undefined) {
        // case3: access token은 유효하지만, refresh token은 만료된 경우
        const newRefreshToken = makeRefreshToken({
          userId: decodedAccess.userId,
          nickname: decodedAccess.nickname,
        });
        // const setRefreshToken = await TokenController.updateRefresh({
        //   _id: DbRefreshToken._id,
        //   refreshToken,
        // });

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
  },
  //...
};

const { ACCESS_SECRET, REFRESH_SECRET } = process.env;
// refresh token 유효성 검사
const refreshVerify = async (token, userId) => {
  try {
    // db에서 refresh token 가져오기
    const { refreshToken } = await Token.findToken(userId);
    if (token === refreshToken && token !== undefined) {
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
    return false;
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
///////////////////////////////////////////////
// case1: access token과 refresh token 모두가 만료된 경우 -> 에러 발생
// case2: access token은 만료됐지만, refresh token은 유효한 경우 ->  access token 재발급
// case3: access token은 유효하지만, refresh token은 만료된 경우 ->  refresh token 재발급
// case4: accesss token과 refresh token 모두가 유효한 경우 -> 바로 다음 미들웨어로 넘긴다.
