const Game = require("../models/games"); // Game 스키마 모델을 가져옵니다
exports.increaseLikeCount = async (req, res) => {
  try {
    const { gameId } = req.params;

    const game = await Game.findById(gameId); // gameId에 해당하는 게임을 가져옵니다.

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    game.likeCount += 1; // 좋아요 카운트를 증가시킵니다.
    await game.save(); // 게임을 저장하여 변경사항을 반영합니다.

    res.json({ success: true, message: "Like count increased successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
