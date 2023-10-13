const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const likeSchema = new mongoose.Schema(
  {
    post: {
      type: ObjectId,
      ref: "Game", // 'Post' 모델과 연결
    },
    likedBy: {
      type: ObjectId,
      ref: "User", // 'User' 모델과 연결
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Like", likeSchema);
