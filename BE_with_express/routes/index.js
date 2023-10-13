const express = require("express");
const router = express.Router();

const loginRouter = require("./login");
const logoutRouter = require("./logout");
const gamesRouter = require("./games");
const commentsRouter = require("./comments");
const signupRouter = require("./signup");
const likesRouter = require("./likes");

router.use("/signup", signupRouter);
router.use("/games", gamesRouter);
router.use("/games/:gameId/comments", commentsRouter);
router.use("/login", loginRouter);
router.use("/logout", logoutRouter);
router.use("/like", likesRouter);

module.exports = router;
