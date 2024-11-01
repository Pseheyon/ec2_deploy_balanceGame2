const express = require("express");
const dontenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
dontenv.config();

const router = express.Router();

const path = require("path");
const indexRouter = require("./routes/index.js");

const db = require("./models/index.js");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", express.static(path.join(__dirname, "public")));
app.use(
  "/balancegame",
  express.static(path.join(__dirname, "../FE_with_react/build"))
);

app.use(router);

router.get("/", (req, res) => {
  res.send("Hi!");
});

app.get("/balancegame", function (req, res) {
  res.sendFile(path.join(__dirname, "../FE_with_react/build/index.html"));
});
app.use("/api", express.json(), indexRouter);

app.listen(process.env.PORT, () => {
  console.log(`서버가 ${process.env.PORT} 포트에서 켜졌어요!`);
});
