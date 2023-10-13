import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
require("dotenv").config();

mongoose
  .connect(MONGO_URI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));
const db = mongoose.connection;
autoIncrement.initialize(db);
db.on("error", console.error.bind(console, "몽고디비연결 에러", err));
db.once("open", () => {
  console.log("DB Connected");
});

export default mongoose;

app.get("/api/gamepost/comments/:gameId", (req, res) => {
  const { gameId } = req.params;

  // gameId를 기반으로 해당 게임의 댓글을 가져옵니다.
  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  const comments = game.comments; // 게임의 댓글 배열
  res.json(comments);
});
// // ___________게시글의 댓글 추가___________
app.post("/api/gamepost/comments/:gameId", (req, res) => {
  const { gameId } = req.params;
  const { content, option, userId } = req.body;

  const game = postList[0].card.find((c) => c.id === parseInt(gameId));
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  const comments = game.comments;
  const newComment = {
    commentId: comments.length + 1,
    userId,
    content,
    option,
  };

  comments.push(newComment);

  res.json(newComment);
});

// ___________게시글의 댓글 삭제___________
app.delete("/api/gamepost/comments/:gameId/:option/:commentId", (req, res) => {
  const { gameId, option, commentId } = req.params;

  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  const comments = game.comments;

  const commentIndex = comments.findIndex(
    (c) => c.commentId === parseInt(commentId)
  );

  if (commentIndex === -1) {
    return res.status(404).json({ error: "Comment not found" });
  }

  comments.splice(commentIndex, 1);

  res.json({ success: true, message: "Comment deleted successfully" });
});

// ___________게시글의 댓글 수정___________
app.patch("/api/gamepost/comments/:gameId/:commentId", (req, res) => {
  const { gameId, option, commentId } = req.params;
  const { content } = req.body;

  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  const comments = game.comments;
  const comment = comments.find((c) => c.commentId === parseInt(commentId));

  if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
  }

  comment.content = content;

  res.json({ success: true, message: "Comment updated successfully" });
});

app.get("/", function (req, res) {
  res.send("helo world");
});

app.get("/api/gamepost", (req, res) => {
  res.json(postList);
});
// ___________게시글의 데이터를 전송___________
app.get("/api/gamepost/posts", (req, res) => {
  res.json({ games: postList[0].card });
});

app.get("/api/gamepost/posts/:gameId", (req, res) => {
  const { gameId } = req.params;

  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  res.json(game);
});

let id = 2;
//-----------------게시글 추가
app.post("/api/gamepost/posts", (req, res) => {
  const { userId, title, optionA, optionB, likesA, likesB, comments } =
    req.body;

  const gameId = postList[0].card.length + 1;

  const newPost = {
    id: id++,
    gameId: gameId,
    userId,
    title,
    optionA,
    optionB,
    likesA,
    likesB,
    comments,
  };

  postList[0].card.push(newPost);
  res.json({ success: true, card: newPost });
});
// PATCH 요청을 처리하는 라우트 추가
app.patch("/api/gamepost/posts/:gameId", (req, res) => {
  const { gameId } = req.params;
  const updatedGameData = req.body;

  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  Object.assign(game, updatedGameData);

  res.json(game);
});

// 좋아요 엔드포인트
app.post("/api/like/:gameId", (req, res) => {
  const { gameId } = req.params;
  const { option } = req.body;

  const game = gameList.find((g) => g.gameId == gameId);

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  if (option === "A") {
    game.likesA += 1;
  } else if (option === "B") {
    game.likesB += 1;
  } else {
    return res.status(400).json({ error: "Invalid option" });
  }

  res.json({ success: true, likesA: game.likesA, likesB: game.likesB });
});

app.use("/", express.static(path.join(__dirname, "public")));
app.use(
  "/react",
  express.static(path.join(__dirname, "../FE_with_react/build"))
);
app.set("port", process.env.PORT || 5001);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../FE_with_react/build/index.html"));
});
app.get("/react", function (req, res) {
  res.sendFile(path.join(__dirname, "../FE_with_react/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../FE_with_react/build/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중..");
});
