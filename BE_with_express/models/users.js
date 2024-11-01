const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.virtual("relatedGame", {
  ref: "Game",
  localField: "_id",
  foreignField: "userId",
});
userSchema.virtual("relatedToken", {
  ref: "Token",
  localField: "_id",
  foreignField: "userId",
});
userSchema.virtual("relatedComment", {
  ref: "Comment",
  localField: "_id",
  foreignField: "userId",
});
userSchema.set("toObject", { virtuals: true });
userSchema.set("toJson", { virtuals: true });
userSchema.set("toString", { virtuals: true });

module.exports = mongoose.model("User", userSchema);
