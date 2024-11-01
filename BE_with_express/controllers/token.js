const express = require("express");
const token = require("../models/token");

exports.findToken = async (req, res) => {
  const userToken = await token.findOne({ _id: userId });
  return userToken;
};

exports.updateRefresh = async ({ _id, refreshToken }) => {
  const update = await token.updateOne(
    { _id },
    { _id, refreshToken },
    { upsert: true }
  );
  return update;
};
