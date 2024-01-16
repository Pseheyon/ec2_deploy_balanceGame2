const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const gameSchema = new mongoose.Schema({
  gameId: { type: String, required: true },
  title: {
    type: String,
    required: [true, "제목은 필수입니다."],
  },
  userNic: {
    type: String,
    required: true,
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  like: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});
gameSchema.virtual("relatedUser", {
  ref: "User",
  localField: "_id",
  foreignField: "gameId",
});

gameSchema.virtual("relatedComment", {
  ref: "Comment",
  localField: "gameId",
  foreignField: "gameId",
});
gameSchema.set("toObject", { virtuals: true });
gameSchema.set("toJson", { virtuals: true });
gameSchema.set("toString", { virtuals: true });

module.exports = mongoose.model("Game", gameSchema);
