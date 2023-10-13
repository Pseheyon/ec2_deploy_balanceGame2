const express = require("express");
const router = express.Router();
const Game = require("../models/game");
// ___________게시글의 댓글 조회___________
router.get("/comments/:gameId", (req, res) => {
  const { gameId } = req.params;

  // gameId를 기반으로 해당 게임의 댓글을 가져옵니다.
  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  const comments = game.comments; // 게임의 댓글 배열
  res.json(comments);
});
// ___________게시글의 댓글 추가___________
router.post("/comments/:gameId", (req, res) => {
  const { gameId } = req.params;
  const { content, option, userId } = req.body;

  const game = postList[0].card.find((c) => c.id === parseInt(gameId));
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  const comments = game.comments;
  const newComment = {
    commentId: comments.length + 1,
    userId,
    content,
    option,
  };

  comments.push(newComment);

  res.json(newComment);
});

// ___________게시글의 댓글 삭제___________
router.delete("/comments/:gameId/:option/:commentId", (req, res) => {
  const { gameId, option, commentId } = req.params;

  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  const comments = game.comments;

  const commentIndex = comments.findIndex(
    (c) => c.commentId === parseInt(commentId)
  );

  if (commentIndex === -1) {
    return res.status(404).json({ error: "Comment not found" });
  }

  comments.splice(commentIndex, 1);

  res.json({ success: true, message: "Comment deleted successfully" });
});

// ___________게시글의 댓글 수정___________
router.patch("/comments/:gameId/:commentId", (req, res) => {
  const { gameId, option, commentId } = req.params;
  const { content } = req.body;

  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  const comments = game.comments;
  const comment = comments.find((c) => c.commentId === parseInt(commentId));

  if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
  }

  comment.content = content;

  res.json({ success: true, message: "Comment updated successfully" });
});

module.exports = router;
