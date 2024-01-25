const Game = require("../models/games");
const Comment = require("../models/comments");
const User = require("../models/users");
const { verify } = require("../utils/jwt");
const jwt = require("jsonwebtoken");

exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find().populate("comments");
    res.json(games);
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
};

exports.getGameById = async (req, res) => {
  const { gameId } = req.params;

  try {
    const game = await Game.findOne({ gameId });
    if (!game) {
      return res.status(404).json({ error: "게임을 찾을 수 없습니다." });
    }
    res.json(game);
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
};

exports.createGame = async (req, res) => {
  const { title, optionA, optionB, userNic } = req.body;

  try {
    const user = await User.findOne({ nickname: userNic });
    if (!user) {
      return res.status(404).json({ error: "로그인 후 이용이 가능합니다." });
    }

    const gameCount = await Game.countDocuments();

    const gameId = `${gameCount + 1}`;

    const game = new Game({
      gameId,
      title,
      optionA,
      optionB,
      userNic,
      postedBy: user._id,
    });

    await game.save();
    res.status(201).json({ game });
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
};

exports.updateGame = async (req, res) => {
  const { gameId } = req.params;
  const { title, optionA, optionB, userNic } = req.body;
  const _id = req.body._id;
  try {
    const user = await User.findOne({ nickname: userNic });
    const gameNicfind = await Game.findOne({ userNic: userNic });

    if (!(user.nickname == gameNicfind.userNic)) {
      return res.status(404).json({ error: "글쓴이와 일치하지 않습니다." });
    }

    const game = await Game.findByIdAndUpdate(
      { _id },
      { title, optionA, optionB },
      { new: true }
    );

    if (!game) {
      return res.status(404).json({ error: "게임을 찾을 수 없습니다." });
    }

    res.json(game);
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
};

exports.deleteGame = async (req, res) => {
  const { gameId } = req.params;

  try {
    const game = await Game.findByIdAndRemove(gameId);

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    await Comment.deleteMany({ gameId: game._id });

    res.json({ success: true, message: "Game deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
