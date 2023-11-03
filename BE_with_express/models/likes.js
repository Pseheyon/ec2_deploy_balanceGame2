const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const likeSchema = new mongoose.Schema({
  gameId: {
    type: ObjectId,
    ref: "Game",
  },
  likeA: {
    type: Number,
    default: 0,
  },
  likeB: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("like", likeSchema);
