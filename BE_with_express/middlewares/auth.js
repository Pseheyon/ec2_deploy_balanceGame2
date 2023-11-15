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

const TokenDb = require("../models/token");
// module.exports = {
//   async checkTokens(req, res, next) {
//     try {
//       if (req.headers["authorization"] && req.cookies.refreshToken) {
//         const token = req.headers["authorization"].split(" ")[1];
//         const refreshToken = req.cookies.refreshToken;
//         const authResult = verify(token);
//         const decoded = jwt.decode(token);

//         if (!decoded) {
//           return res.status(401).json({
//             ok: false,
//             message: "No authorized!",
//           });
//         }
//         const refreshResult = await refreshVerify(refreshToken, decoded.userId);

//         if (
//           authResult.ok == false
//           //&& authResult.message === "jwt expired"
//         ) {
//           if (refreshResult == false) {
//             return res.status(401).json({
//               ok: false,
//               message: "권한 없음! 다시 로그인이 필요합니다.",
//             });
//           } else {
//             const newAccessToken = makeAccessToken({
//               userId: decoded.userId,
//               nickname: decoded.nickname,
//             });
//             res.cookie("refreshToken", newAccessToken, {
//               secure: false,
//               httpOnly: true,
//             });
//             return res.status(200).json({
//               ok: true,
//               data: {
//                 accessToken: newAccessToken,
//                 refreshToken,
//               },
//             });
//           }
//         } else {
//           return res.status(400).json({
//             ok: false,
//             message: `Access token은 만료되지 않았습니다.`,
//           });
//           next();
//         }
//       } else {
//         const token = req.headers["authorization"].split(" ")[1];
//         const refreshToken = req.cookies.refreshToken;
//         const authResult = verify(token);
//         const decoded = jwt.decode(token);
//         const refreshResult = await refreshVerify(refreshToken, decoded.userId);
//         // 헤더에 토큰이나 리프레시 토큰이 없는 경우 처리refreshToken
//         return res.status(401).json({
//           ok: false,
//           message: `토큰이나 리프레시 토큰이 필요합니다.token-->${token}refreshToken-->${refreshToken}authResult-->${JSON.stringify(
//             authResult
//           )}decoded-->${JSON.stringify(
//             decoded
//           )},refreshResult-->${refreshResult}authResult.ok ${
//             authResult.ok
//           }refreshResult$`,
//         });
//       }
//     } catch (error) {
//       // 예외 발생 시 처리
//       console.error(error);
//       return res.status(401).json({ message: "인증 오류" });
//     }
//     // 다음 미들웨어 또는 컨트롤러로 이동
//     next();
//   },
// };
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
        const token = req.headers["authorization"].split(" ")[1];
        const refreshToken = req.cookies.refreshToken;
        const authResult = verify(token);
        const decoded = jwt.decode(token);
        const refreshResult = await refreshVerify(refreshToken, decoded.userId);
        // 헤더에 토큰이나 리프레시 토큰이 없는 경우 처리
        return res.status(401).json({
          ok: false,
          message: `토큰이나 리프레시 토큰이 필요합니다.token-->${token}refreshToken-->${refreshToken}authResult-->${JSON.stringify(
            authResult
          )}decoded-->${JSON.stringify(
            decoded
          )},refreshResult-->${refreshResult}authResult.ok ${
            authResult.ok
          }refreshResult$`,
        });
      }
    } catch (error) {
      const token = req.headers["authorization"].split(" ")[1];
      // const refreshToken = req.cookies.refreshToken;
      const authResult = verify(token);
      // const decoded = jwt.decode(token);
      console.error(error);
      return res.status(401).json({
        message: `인증 오류.token-->${token}authResult-->${JSON.stringify(
          authResult
        )}`,
      });
    }
    // 이 부분은 여전히 필요하지 않으므로 주석 처리합니다.
    // next();
  },
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
