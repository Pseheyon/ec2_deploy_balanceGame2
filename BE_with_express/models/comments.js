const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  gameId: {
    type: ObjectId,
    ref: "Game",
  },
  userId: {
    type: ObjectId,
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

module.exports = mongoose.model("Comment", commentSchema);
