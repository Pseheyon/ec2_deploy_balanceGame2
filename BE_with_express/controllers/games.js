const Game = require("../models/games"); // Game 스키마 모델을 가져옵니다.
const Comment = require("../models/comments"); // Comment 스키마 모델을 가져옵니다.
const User = require("../models/users");
const { verify } = require("../utils/jwt");
const jwt = require("jsonwebtoken");

// 모든 게임을 가져오는 컨트롤러
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find().populate("comments");
    res.json(games);
  } catch (error) {
    res.status(500).json({ errorMessage: `${error}` });
  }
};

// 특정 게임을 가져오는 컨트롤러
exports.getGameById = async (req, res) => {
  const { gameId } = req.params;

  try {
    const game = await Game.findOne({ gameId }); // gameId로 게임을 조회
    if (!game) {
      return res.status(404).json({ error: "게임을 찾을 수 없습니다." });
    }
    res.json(game);
  } catch (error) {
    res.status(500).json({ errorMessage: `${error}` });
  }
};

// 게임을 생성하는 컨트롤러

exports.createGame = async (req, res) => {
  const { title, optionA, optionB, userNic } = req.body;

  try {
    // 게임 작성자의 ObjectId 가져오기
    const user = await User.findOne({ nickname: userNic });
    console.log(userNic);
    console.log(user);
    if (!user) {
      return res
        .status(404)
        .json({ errorMessage: "로그인 후 이용이 가능합니다." });
    }

    // 게임 갯수 조회
    const gameCount = await Game.countDocuments();

    // 게임 아이디 생성
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
    console.error(error);
    res.status(500).json({ errorMessage: `서버에러${error}` });
  }
};

// 게임을 업데이트하는 컨트롤러
exports.updateGame = async (req, res) => {
  const { gameId } = req.params;
  const { title, optionA, optionB, userNic } = req.body;
  const _id = req.body._id;
  try {
    const user = await User.findOne({ nickname: userNic });
    const gameNicfind = await Game.findOne({ userNic: userNic });

    if (!(user.nickname == gameNicfind.userNic)) {
      return res
        .status(404)
        .json({ errorMessage: "글쓴이와 일치하지 않습니다." });
    }

    const game = await Game.findByIdAndUpdate(
      { _id },
      { title, optionA, optionB },
      { new: true }
    );

    if (!game) {
      return res.status(404).json({ errorMessage: "게임을 찾을 수 없습니다." });
    }

    res.json(game);
  } catch (error) {
    res.status(500).json({ errorMessage: `서버 오류${error}` });
  }
};

// 게임을 삭제하는 컨트롤러
exports.deleteGame = async (req, res) => {
  const { gameId } = req.params;

  try {
    const game = await Game.findByIdAndRemove(gameId);

    if (!game) {
      return res.status(404).json({ errorMessage: "Game not found" });
    }

    // 해당 게임과 연결된 댓글도 모두 삭제
    await Comment.deleteMany({ gameId: game._id });

    res.json({ success: true, message: "Game deleted successfully" });
  } catch (error) {
    res.status(500).json({ errorMessage: "Internal server error" });
  }
};
