const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comments"); // 게임 컨트롤러를 가져옵니다

// 게임의 모든 댓글을 가져오는 라우트
// router.get("/", commentController.getAllComments);

// 게임의 댓글을 가져오는 라우트
router.get("/:gameId", commentController.getCommentsByGameId);

// 게임에 댓글을 추가하는 라우트
router.post("/:gameId", commentController.addCommentToGame);

// 게임의 댓글을 삭제하는 라우트
router.delete("/:gameId/:commentId", commentController.deleteComment);

// 게임의 댓글을 수정하는 라우트
router.patch("/:gameId/:commentId", commentController.updateComment);

module.exports = router;
