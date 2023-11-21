// module.exports = [
//   {
//     userId: "boksil1",
//     nikname: "nikname1",
//     password: "password1",
//     confirmpassword: "confirmpassword1",
//   },
//   {
//     userId: "boksil2",
//     nikname: "nikname2",
//     password: "password2",
//     confirmpassword: "confirmpassword2",
//   },
// ];
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   userId: {
//     type: String,
//     required: true,
//   },
//   nickname: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   confirmPassword: {
//     type: String,
//     required: true,
//   },
// });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    // email 필드
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: String,
  },
  nickname: {
    // nickname 필드
    type: String,
    required: true,
    unique: true,
  },
  password: {
    // password 필드
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);

// // 가상의 userId 값을 할당
// userSchema.virtual("userId").get(function () {
//   return this._id.toHexString();
// });

// // user 정보를 JSON으로 형변환 할 때 virtual 값이 출력되도록 설정
// userSchema.set("toJSON", {
//   virtuals: true,
// });
