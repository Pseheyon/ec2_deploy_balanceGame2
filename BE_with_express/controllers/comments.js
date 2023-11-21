// controllers/commentController.js
const Comment = require("../models/comments");
const Game = require("../models/games");

exports.getCommentsByGameId = async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const comments = await Game.find({ gameId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: `서버에러${error}` });
  }
};

exports.getCommentByCommentId = async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const option = req.params.option;
    const commentId = req.params.commentId;
    const comment = await Comment.findOne({ gameId, option, _id: commentId });
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: `서버에러${error}` });
  }
};

exports.addComment = async (req, res) => {
  try {
    const gameIdNum = req.params.gameId;
    const gameId = `${gameIdNum}`;
    const { commentId, option, content } = req.body;
    const comment = new Comment({ gameId, commentId, option, content });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: `서버에러${error}` });
  }
};

// exports.addComment = async (req, res) => {
//   try {
//     const gameId = mongoose.Types.ObjectId(req.params.gameId);
//     const { commentId, option, content } = req.body;
//     const comment = new Comment({ gameId, commentId, option, content });
//     await comment.save();
//     res.status(201).json(comment);
//   } catch (error) {
//     res.status(500).json({ error: `서버에러${error}` });
//   }
// };

exports.updateComment = async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const commentId = req.params.commentId;
    const { option, content } = req.body;
    const comment = await Comment.findOneAndUpdate(
      { gameId, _id: commentId },
      { option, content },
      { new: true }
    );
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: `서버에러${error}` });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const option = req.params.option;
    const commentId = req.params.commentId;
    const comment = await Comment.findOneAndRemove({
      gameId,
      option,
      _id: commentId,
    });
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: `서버에러${error}` });
  }
};
