const Like = require("../models/likes");

exports.updateLike = async (req, res) => {
  try {
    const { gameId, option } = req.params;
    const like = await Like.findOne({ gameId });
    if (!like) {
      return res.status(404).json({ error: "Like not found" });
    }

    if (option === "likeA") {
      like.likeA += 1; // 좋아요 A 증가
    } else if (option === "likeB") {
      like.likeB += 1; // 좋아요 B 증가
    } else {
      return res.status(400).json({ error: "Invalid option" });
    }

    await like.save();

    res.json(like);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
