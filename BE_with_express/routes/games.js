const express = require("express");
const router = express.Router();
const gameController = require("../controllers/games");
const { checkTokens } = require("../middlewares/auth");

// 모든 게임을 가져오는 라우트
router.get("/", gameController.getAllGames);

// 특정 게임을 가져오는 라우트
router.get("/:gameId", gameController.getGameById);

// 게임을 생성하는 라우트
router.post("/", checkTokens, gameController.createGame);

// 게임을 업데이트하는 라우트
router.patch("/:gameId", checkTokens, gameController.updateGame);

// 게임을 삭제하는 라우트
router.delete("/:gameId", checkTokens, gameController.deleteGame);

module.exports = router;
