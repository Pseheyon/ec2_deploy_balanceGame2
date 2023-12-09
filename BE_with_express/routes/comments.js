const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments");

router.get("/:gameId", commentController.getComments);
router.get("/:gameId", commentController.getCommentByCommentId);
router.post("/:gameId", commentController.addComment);
router.patch("/:gameId", commentController.updateComment);
router.delete("/:gameId", commentController.deleteComment);

module.exports = router;
