// controllers/commentController.js
const Comment = require("../models/comments");
const Game = require("../models/games");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

exports.getCommentsByGameId = async (req, res) => {
  try {
    //const gameId = toString(req.params.gameId);
    const { gameId } = req.params;
    const game = await Game.findOne({ gameId });
    // Convert gameId to a valid ObjectId
    //const validGameId = ObjectId.isValid(gameId) ? new ObjectId(gameId) : null;
    // console.log("validGameId", validGameId);
    // console.log("gameId", gameId);
    // if (!validGameId) {
    //   return res.status(400).json({ error: "Invalid gameId format" });
    // }

    // const game = await Game.findOne({
    //   gameId: toString(gameId),
    // }).populate({
    //   path: "comments",
    //   populate: {
    //     path: "author",
    //     model: "User",
    //   },
    // });

    if (!game) {
      return res.status(404).json({ error: "게임을 찾을 수 없습니다." });
    }
    const comment = await Comment.findOne({ _id: game.comments });
    res.json({ comment });
  } catch (error) {
    res.status(500).json({ error: `서버에러 ${error}` });
  }
};

exports.addComment = async (req, res) => {
  const { gameId } = req.params;
  const { option, content } = req.body;

  try {
    const game = await Game.findOne({ gameId });
    // Convert gameId to a valid ObjectId
    // const validGameId = ObjectId.isValid(gameId) ? new ObjectId(gameId) : null;
    // console.log("validGameId", validGameId);
    console.log("gameId", gameId);
    // if (!validGameId) {
    //   return res.status(400).json({ error: "Invalid gameId format" });
    // }

    // const game = await Game.findOne({
    //   gameId: toString(gameId),
    // }).populate({
    //   path: "comments",
    //   populate: {
    //     path: "author",
    //     model: "User",
    //   },
    // });

    if (!game) {
      return res.status(404).json({ error: "게임을 찾을 수 없습니다." });
    }

    const comment = new Comment({
      option: `option${option}`,
      content,
    });

    await comment.save();
    game.comments.push(comment);
    await game.save();

    const savedComment = await Comment.findById(comment._id).populate("author");

    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ error: `서버에러 ${error}` });
  }
};
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
exports.getCommentByCommentId = async (req, res) => {
  try {
    const gameId = req.params.gameId; // req.params.gameId로 수정
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
