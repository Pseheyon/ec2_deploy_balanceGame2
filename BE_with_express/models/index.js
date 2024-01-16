// const mongoose = require("mongoose");
require("dotenv").config(); // .env 파일에서 환경변수 불러오기
const { PORT, MONGODB_URI } = process.env;

const mongoose = require("mongoose");
mongoose
  .connect(
    //MONGODB_URI,
    "mongodb://0.0.0.0/ec2_balanceGame",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((value) => console.log("MongoDB 연결에 성공하였습니다."))
  .catch((reason) => console.log("MongoDB 연결에 실패하였습니다."));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

module.exports = db;
