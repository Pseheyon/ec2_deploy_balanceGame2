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
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
<<<<<<< HEAD
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
=======
  },
  nickname: {
    type: String,
    required: true,
>>>>>>> 821e9bdc250bf3f11062b4e0c1d98a5ac59edd10
  },
  password: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
  confirmpassword: {
    type: String,
    required: true,
  },
  comment: String, // 옵션에 type밖에 없을 경우 간단하게 표현 할 수 있다.
  createdAt: {
    type: Date,
    default: Date.now, // 기본값
  },
});
module.exports = mongoose.model("Comments", userSchema);
=======
  confirm_password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
>>>>>>> 821e9bdc250bf3f11062b4e0c1d98a5ac59edd10
