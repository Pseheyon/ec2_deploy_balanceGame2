const dontenv = require("dotenv");
const express = require("express");
dontenv.config();
const jwt = require("jsonwebtoken");

const JWT_KEYA = process.env.ACCESS_SECRET;
const JWT_KEYR = process.env.REFRESH_SECRET;

const makeAccessToken = (Object) => {
  const token = jwt.sign(Object, JWT_KEYA, {
    expiresIn: "1m",
    issuer: "About Tech",
  });
  return token;
};

const makeRefreshToken = () => {
  // refresh token 발급
  const refreshToken = jwt.sign({}, JWT_KEYR, {
    // refresh token은 payload 없이 발급
    algorithm: "HS256",
    expiresIn: "24h",
    issuer: "About Tech",
  });
  return refreshToken;
};

export { makeAccessToken, makeRefreshToken };
