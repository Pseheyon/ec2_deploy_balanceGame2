const express = require("express");
const router = express.Router();

const gamesRouter = require("./games");
const commentsRouter = require("./comments");
const likesRouter = require("./likes");
const loginRouter = require("./login");
const logoutRouter = require("./logout");
const signupRouter = require("./signup");
const myPageRouter = require("./users");

router.use("/games", gamesRouter);
router.use("/comments", commentsRouter);
router.use("/like", likesRouter);
router.use("/user/login", loginRouter);
router.use("/user/logout", logoutRouter);
router.use("/user/signup", signupRouter);
router.use("/user/me", myPageRouter);

module.exports = router;
