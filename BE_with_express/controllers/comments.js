// controllers/commentController.js
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
      return res.status(404).json({ error: "게임을 찾을 수 없습니다." });
    }

    // 게임에 속한 댓글들을 조회하고 해당 댓글들의 작성자 닉네임으로 populate
    const populatedComments = await Comment.find({
      _id: { $in: game.comments },
    })
      .populate({
        path: "author",
        select: "nickname -_id", // _id 필드 제외하고 nickname만 선택
      })
      .select("-_id content option author:author.nickname"); // _id 필드 제외하고 nickname만 선택
    const modifiedComments = populatedComments.map((comment) => ({
      content: comment.content,
      option: comment.option,
      author: comment.author.nickname, // author.nickname으로 변경
      __v: comment.__v,
    }));

    res.json({ comments: modifiedComments });
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
};
exports.addComment = async (req, res) => {
  const { gameId } = req.params;
  const { option, content, author } = req.body;

  try {
    const game = await Game.findOne({ gameId });

    if (!game) {
      return res.status(404).json({ error: "게임을 찾을 수 없습니다." });
    }
    const user = await User.findOne({ nickname: author });

    if (!user) {
      return res
        .status(400)
        .json({ error: "유효한 작성자를 찾을 수 없습니다." });
    }
    console.log("user", user);

    // 해당 사용자에 대한 Comment를 생성
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

    const savedComment = await Comment.findById(comment._id).populate({
      path: "author",
      select: "nickname", // 필요한 정보만 선택
    });

    res.status(201).json(savedComment);
  } catch (error) {
    res.status(500).json({ error: ` ${error}` });
  }
};
exports.updateComment = async (req, res) => {
  try {
    const gameId = req.params.gameId;
    const _id = req.body._id;

    // _id를 ObjectId로 변환
    // const convertedId = new mongoose.Types.ObjectId(_id);

    const comment = await Comment.findOneAndUpdate(
      { _id },
      { $set: { content: req.body.content } }, // content만 업데이트
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
    const _id = req.body._id;
    //const commentId = req.params.commentId;
    const comment = await Comment.findOneAndRemove({
      _id,
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
    //const option = req.params.option;
    // const commentId = req.params.commentId;
    const comment = await Comment.findOne({ gameId, option, _id });
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: `서버에러${error}` });
  }
};
