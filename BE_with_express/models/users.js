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
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirm_password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
