const dontenv = require("dotenv");
const express = require("express");
dontenv.config();
const jwt = require("jsonwebtoken");
const { ACCESS_SECRET, REFRESH_SECRET } = process.env;

exports.makeAccessToken = (data) => {
  return jwt.sign(data, ACCESS_SECRET, {
    expiresIn: "1m",
    issuer: "About Tech",
  });
};

exports.makeRefreshToken = (data) => {
  return jwt.sign(data, REFRESH_SECRET, {
    expiresIn: "24h",
    issuer: "About Tech",
  });
};
