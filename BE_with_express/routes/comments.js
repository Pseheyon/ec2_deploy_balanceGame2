const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments");

router.get("/:gameId", commentController.getCommentsByGameId);
router.get(
  "/:gameId/:option/:commentId",
  commentController.getCommentByCommentId
);
router.post("/:gameId", commentController.addComment);
router.patch("/:gameId/:commentId", commentController.updateComment);
router.delete("/:gameId/:option/:commentId", commentController.deleteComment);

module.exports = router;
