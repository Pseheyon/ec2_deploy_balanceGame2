const Comment = require("../models/comments");
const Game = require("../models/games");
const User = require("../models/users");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

exports.getComments = async (req, res) => {
  try {
    const { gameId } = req.params;
    const game = await Game.findOne({ gameId });

    if (!game) {
      return res.status(404).json({ errorMessage: "게임을 찾을 수 없습니다." });
    }

    const populatedComments = await Comment.find({
      _id: { $in: game.comments },
    })
      .populate({
        path: "author",
        select: "nickname -_id",
      })
      .select("_id content option author:author.nickname");
    const modifiedComments = populatedComments.map((comment) => ({
      content: comment.content,
      option: comment.option,
      author: comment.author.nickname,
      __v: comment.__v,
      _id: comment._id,
    }));

    res.json({ comments: modifiedComments });
  } catch (error) {
    res.status(500).json({ errorMessage: `${error}` });
  }
};
exports.addComment = async (req, res) => {
  const { gameId } = req.params;
  const { option, content, author } = req.body;

  try {
    const game = await Game.findOne({ gameId });

    if (!game) {
      return res.status(404).json({ errorMessage: "게임을 찾을 수 없습니다." });
    }
    const user = await User.findOne({ nickname: author });

    if (!user) {
      return res
        .status(400)
        .json({ errorMessage: "유효한 작성자를 찾을 수 없습니다." });
    }
    console.log("user", user);

    console.log("user", user);
    const ObjectAuthor = author;
    const comment = new Comment({
      option: `option${option}`,
      content,
      author: user._id,
    });

    console.log("comment", comment);
    await comment.save();
    await game.comments.push(comment);
    await game.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ errorMessage: ` ${error}` });
  }
};
exports.updateComment = async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const { author, _id } = req.body;
    const user = await User.findOne({ nickname: author });

    if (!user) {
      return res
        .status(400)
        .json({ errorMessage: "유효한 작성자를 찾을 수 없습니다." });
    }

    const comment = await Comment.findOneAndUpdate(
      { _id },
      { $set: { content: req.body.content } },
      { new: true }
    );
    if (!comment) {
      return res.status(404).json({ errorMessage: "댓글을 찾을 수 없습니다." });
    }
    console.log(comment.author, "comment.author", user._id, " user._id");
    if (!(comment.author === user._id)) {
      return res
        .status(404)
        .json({ errorMessage: "댓글 작성자가 일치하지 않습니다." });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ errorMessage: `${error}` });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const _id = req.body._id;
    const comment = await Comment.findOneAndRemove({
      _id,
    });
    if (!comment) {
      return res.status(404).json({ errorMessage: "Comment not found" });
    }
    res.json({ success: true, message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: `${error}` });
  }
};
exports.getCommentByCommentId = async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const comment = await Comment.findOne({ gameId, option, _id });
    if (!comment) {
      return res.status(404).json({ errorMessage: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ errorMessage: `${error}` });
  }
};
