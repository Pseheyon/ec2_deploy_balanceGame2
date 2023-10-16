// app.post("/users", (req, res) => {
//   const { userId, nikname, password, cofirmpassword } = req.body;
//   user.push;
//   return res.send(users);
// });
// //read users
// app.get("/users/:userId?", (req, res) => {
//   const { userId } = req.params;

//   if (userId) {
//     for (let i = 0; i < user.length; i++) {
//       if (user[i].userId == userId) {
//         return res.send(user[i]);
//       }
//     }
//     return res.status(404).send("사용자정보를 찾을 수 없습니다.");
//   }
//   return res.sendStatus(user);
// });
// //delete users
// app.delete("/users/:userId", (req, res) => {
//   for (let i = 0; i < user.length; i++) {
//     if (user[i].userId == req.params.userId) {
//       user.splice(i, 1);
//       return res.send(user);
//     }
//   }
//   return res.status(404).send("사용자정보를 찾을 수 없습니다.");
// });
const express = require("express");
const router = express.Router();

module.exports = router;
