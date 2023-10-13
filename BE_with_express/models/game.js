// const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

// const gameSchema = new mongoose.Schema(
//   {
//     gameId: {
//       type: Number,
//       unique: true,
//     },
//     userId: String,
//     userName: String,
//     title: {
//       type: String,
//       required: [true, "제목은 필수입니다."],
//     },
//     optionA: {
//       type: String,
//       required: [true, "optionA를 작성해 주세요."],
//     },
//     optionB: {
//       type: String,
//       required: [true, "optionB를 작성해 주세요."],
//     },
//     commentId: {
//       type: Number,
//       default: 0,
//     },
//     likeCnt: {
//       type: Number,
//       default: 0,
//     },
//   },
//   { timestamps: true }
// );
// module.exports = mongoose.model("Game", gameSchema);
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const gameSchema = new mongoose.Schema(
  {
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
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    image: {
      url: String,
      public_id: String,
    },
    comments: [
      {
        text: String,
        created: { type: Date, default: Date.now },
        postedBy: {
          type: ObjectId,
          ref: "User",
        },
        option,
      },
    ],
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema);
