const Comment = require("../models/comments"); // Comment 스키마 모델을 가져옵니다.

// 게임의 댓글을 가져오는 컨트롤러
exports.getCommentsByGameId = async (req, res) => {
  try {
    const { gameId } = req.params;
    const comments = await Comment.find({ gameId }).populate(
      "userId",
      "username"
    ); // gameId에 해당하는 모든 댓글을 가져옵니다.
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// 게임에 댓글을 추가하는 컨트롤러
exports.addCommentToGame = async (req, res) => {
  try {
    const { gameId } = req.params;
    const { content, option, userId } = req.body;

    const comment = new Comment({ gameId, userId, content, option }); // 댓글 생성

    await comment.save(); // 댓글을 저장
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// 게임의 댓글을 삭제하는 컨트롤러
exports.deleteComment = async (req, res) => {
  try {
    const { gameId, commentId } = req.params;

    await Comment.findOneAndDelete({ gameId, _id: commentId }); // gameId와 commentId에 해당하는 댓글을 삭제
    res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// 게임의 댓글을 수정하는 컨트롤러
exports.updateComment = async (req, res) => {
  try {
    const { gameId, commentId } = req.params;
    const { content } = req.body;

    const comment = await Comment.findOneAndUpdate(
      { gameId, _id: commentId },
      { content },
      { new: true }
    ); // gameId와 commentId에 해당하는 댓글을 수정

    res.json({
      success: true,
      message: "Comment updated successfully",
      comment,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
