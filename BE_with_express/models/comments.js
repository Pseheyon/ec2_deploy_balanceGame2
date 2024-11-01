const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  gameId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Game",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
  },
  option: {
    type: String,
    enum: ["optionA", "optionB"],
    required: true,
  },
});
commentSchema.virtual("relatedGames", {
  ref: "Game",
  localField: "_id",
  foreignField: "comments",
});
commentSchema.virtual("relatedUser", {
  ref: "User",
  localField: "author",
  justOne: true,
  foreignField: "nickname",
});

commentSchema.set("toObject", { virtuals: true });
commentSchema.set("toJSON", { virtuals: true });
commentSchema.set("toString", { virtuals: true });
module.exports = mongoose.model("Comment", commentSchema);
