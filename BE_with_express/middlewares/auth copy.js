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
    if (req.cookies.access === undefined)
      throw Error("API 사용 권한이 없습니다.");

    const accessToken = verify(req.headers["authorization"].split(" ")[1]);
    const refreshToken = refreshVerify(req.cookies.refresh); // *실제로는 DB 조회
    const { userId, nickname } = accessToken;
    const DbRefreshToken = await Token.findOne({ userId });

    if (accessToken === null) {
      if (refreshToken === undefined && DbRefreshToken === refreshToken) {
        // case1: access token과 refresh token 모두가 만료된 경우
        throw Error("API 사용 권한이 없습니다.");
      } else {
        // case2: access token은 만료됐지만, refresh token은 유효한 경우
        /**
         *  DB를 조회해서 payload에 담을 값들을 가져오는 로직
         */
        const newAccessToken = makeAccessToken({
          userId: accessToken.userId,
          nickname: accessToken.nickname,
        });
        const userId = accessToken.userId;
        res.status(200).json({
          ok: true,
          data: {
            accessToken: newAccessToken,
            userId: userId,
            refreshToken,
          },
        });
        next();
      }
    } else {
      if (refreshToken === undefined) {
        // case3: access token은 유효하지만, refresh token은 만료된 경우
        const newRefreshToken = makeRefreshToken({
          userId: accessToken.userId,
          nickname: accessToken.nickname,
        });
        /**
         * DB에 새로 발급된 refresh token 삽입하는 로직 (login과 유사)
         */
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
module.exports = {
  async checkTokens(req, res, next) {
    try {
      const token = req.headers["authorization"].split(" ")[1];
      if (req.headers["authorization"] && req.cookies.refreshToken) {
        const token = req.headers["authorization"].split(" ")[1];
        const refreshToken = req.cookies.refreshToken;
        const authResult = verify(token);
        const decoded = jwt.decode(token);

        if (!decoded) {
          return res.status(401).json({
            ok: false,
            message: "인가되지 않음!",
          });
        }
        const refreshResult = refreshVerify(refreshToken, decoded.userId);

        if (authResult.ok === false && authResult.message === "jwt expired") {
          if (refreshResult === false) {
            return res.status(401).json({
              ok: false,
              message: `권한 없음! 다시 로그인이 필요합니다. refreshResult-->${refreshResult}`,
            });
          } else {
            //access token은 만료됐지만, refresh token은 유효한 경우
            const newAccessToken = makeAccessToken({
              userId: decoded.userId,
              nickname: decoded.nickname,
            });
            res.cookie("refreshToken", refreshToken, {
              secure: false,
              httpOnly: true,
            });
            const userId = decoded.userId;
            return res.status(200).json({
              ok: true,
              data: {
                accessToken: newAccessToken,
                userId: userId,
                refreshToken,
              },
            });
          }
        }
        // 이제 `next()` 함수를 호출하여 다음 기능을 계속합니다.
        next();
      } else {
        // 헤더에 토큰이나 리프레시 토큰이 없는 경우 처리
        return res.status(401).json({
          ok: false,
          message: `토큰이나 리프레시 토큰이 필요합니다.`,
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(401).json({
        message: `인증 오류`,
      });
    }
  },
};

//...
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
