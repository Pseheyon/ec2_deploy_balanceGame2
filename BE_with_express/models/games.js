const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const gameSchema = new mongoose.Schema({
  gameId: { type: String, required: true },
  title: {
    type: String,
    required: [true, "제목은 필수입니다."],
  },
  optionA: {
    type: String,
    required: [true, "optionA를 작성해 주세요."],
  },
  optionB: {
    type: String,
    required: [true, "optionB를 작성해 주세요."],
  },
  comments: [
    {
      type: ObjectId,
      ref: "Comment",
    },
  ],
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
  like: {
    type: ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Game", gameSchema);
