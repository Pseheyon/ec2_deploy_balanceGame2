const PORT = process.env.PORT || 5000;
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { configDotenv } = require("dotenv");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const postList = [
  {
    card: [
      {
        id: 1,
        gameId: 1,
        userId: "user1",
        title: "깻잎논쟁!",
        optionA: "깻잎정도 떼줄 수 있는 거 아니야?",
        optionB: "깻잎 떼주다가 다른 것도 떼줄 지 어떻게 알아?",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1A",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user2B",
          },
          {
            commentId: 3,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user3A",
          },
          {
            commentId: 4,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user4B",
          },
          {
            commentId: 5,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "userA5",
          },
          {
            commentId: 6,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          {
            commentId: 7,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 8,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          {
            commentId: 9,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 10,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          {
            commentId: 11,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 12,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          {
            commentId: 13,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 14,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          {
            commentId: 15,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 16,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          {
            commentId: 17,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 18,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          {
            commentId: 19,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 20,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          {
            commentId: 21,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 22,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 2,
        gameId: 2,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 3,
        gameId: 3,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 4,
        gameId: 4,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 5,
        gameId: 5,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 6,
        gameId: 6,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 7,
        gameId: 7,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 8,
        gameId: 8,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 9,
        gameId: 9,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 10,
        gameId: 10,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 11,
        gameId: 11,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 12,
        gameId: 12,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 13,
        gameId: 13,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 14,
        gameId: 14,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 15,
        gameId: 15,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 16,
        gameId: 16,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 17,
        gameId: 17,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 18,
        gameId: 18,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 19,
        gameId: 19,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 20,
        gameId: 20,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 21,
        gameId: 21,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 22,
        gameId: 22,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 23,
        gameId: 23,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 24,
        gameId: 24,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 25,
        gameId: 25,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 26,
        gameId: 26,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 27,
        gameId: 27,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 28,
        gameId: 28,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 29,
        gameId: 29,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 30,
        gameId: 30,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 31,
        gameId: 31,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 32,
        gameId: 32,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 33,
        gameId: 33,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 34,
        gameId: 34,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 35,
        gameId: 35,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 36,
        gameId: 36,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 37,
        gameId: 37,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 38,
        gameId: 38,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 39,
        gameId: 39,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 40,
        gameId: 40,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 41,
        gameId: 41,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 42,
        gameId: 42,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 43,
        gameId: 43,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 44,
        gameId: 44,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 45,
        gameId: 45,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 46,
        gameId: 46,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 47,
        gameId: 47,
        userId: "user1",
        title: "속담이다!",
        optionA: "빨간색 휴지",
        optionB: "파란색 휴지",
        likesA: 10,
        likesB: 5,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            //GameId: "${gameId}-{commentId}",
            content: "첫번째 게임 Comment for Option A",
            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "첫번째 게임 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
      {
        id: 48,
        gameId: 48,
        userId: "user2",
        title: "뭐 안먹을래?",
        optionA: "평생 라면 안먹기",
        optionB: "평생 탄산 안먹기2",
        likesA: 15,
        likesB: 8,
        GameImg: "http://localhost:3000/react/images/gameImg-1.png",
        comments: [
          {
            commentId: 1,
            content: "두번째 Comment for Option A",

            option: "A",
            userId: "user1",
          },
          {
            commentId: 2,
            content: "두번째 Comment for Option B",
            option: "B",
            userId: "user1",
          },
          // 다른 댓글들
        ],
      },
    ],
    users: [
      {
        id: 1,
        nickname: "john",
        password: "hashed_password_123",
        confirmPassword: "hashed_password_123",
      },
      {
        id: 2,
        nickname: "jane",
        password: "hashed_password_456",
        confirmPassword: "hashed_password_456",
      },
    ],
  },
];
///////////////////댓글
// 댓글 가져오기 (옵션 A 또는 B에 대한 댓글을 가져올 수 있도록 선택적으로 필터링)
// app.get("/api/gamepost/:gameId", (req, res) => {
//   const { gameId } = req.params;

//   // gameId를 기반으로 해당 게임의 댓글을 가져옵니다.

//   const game = postList[0].cards.find((c) => c.gameId === parseInt(gameId));
//   if (!game) {
//     return res.status(404).json({ error: "Game not found" });
//   }

//   const comments = game.comments; // 게임의 댓글 배열
//   res.json(comments);
// });
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
// // ___________게시글의 댓글 찾기___________
app.post("/api/gamepost/comments/:cardId/:option", (req, res) => {
  const { cardId, option } = req.params;
  const { userId, content } = req.body;

  // cardId와 option을 기반으로 해당 카드와 옵션에 대한 댓글을 추가합니다.
  const card = postList[0].card.find((c) => c.id === parseInt(cardId));
  if (!card) {
    return res.status(404).json({ error: "Card not found" });
  }

  let comments = card.comments; // 댓글 배열을 수정
  const newComment = {
    commentId: comments.length + 1, // 새 댓글 ID 생성 방식은 여러분이 정할 수 있습니다.
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

  // 게임 ID를 기반으로 해당 게임을 찾습니다.
  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  // 해당 게임의 댓글 배열을 가져옵니다.
  const comments = game.comments;

  // 댓글 ID를 기반으로 삭제할 댓글을 찾습니다.
  const commentIndex = comments.findIndex(
    (c) => c.commentId === parseInt(commentId)
  );

  if (commentIndex === -1) {
    return res.status(404).json({ error: "Comment not found" });
  }

  // 댓글을 삭제합니다.
  comments.splice(commentIndex, 1);

  // 삭제된 댓글을 응답합니다.
  res.json({ success: true, message: "Comment deleted successfully" });
});
// ___________게시글의 댓글 수정___________
app.patch("/api/gamepost/comments/:gameId/:commentId", (req, res) => {
  const { gameId, option, commentId } = req.params;
  const { content } = req.body;

  // 게임 ID를 기반으로 해당 게임을 찾습니다.
  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  // 해당 게임의 댓글 배열을 가져옵니다.
  const comments = game.comments;

  // 댓글 ID를 기반으로 수정할 댓글을 찾습니다.
  const comment = comments.find((c) => c.commentId === parseInt(commentId));

  if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
  }

  // 댓글의 내용을 업데이트합니다.
  comment.content = content;

  // 수정된 댓글을 응답합니다.
  res.json({ success: true, message: "Comment updated successfully" });
});
//////////////////////////////

app.get("/", function (req, res) {
  res.send("helo world");
});

app.get("/api/gamepost", (req, res) => {
  res.json(postList);
});
// ___________게시글의 데이터를 전송___________
app.get("/api/gamepost/posts", (req, res) => {
  // 클라이언트에 데이터를 전송
  res.json({ games: postList[0].card });
});

app.get("/api/gamepost/posts/:gameId", (req, res) => {
  const { gameId } = req.params;

  // gameId를 기반으로 해당 게임의 데이터를 가져옵니다.
  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  res.json(game);
});

let id = 2;
app.post("/api/gamepost/posts", (req, res) => {
  const { userId, title, optionA, optionB, likesA, likesB, comments } =
    req.body;

  // 현재 게시물 리스트의 길이를 가져와서 새로운 gameId를 만듭니다.
  const gameId = postList[0].card.length + 1;

  // 게시물 생성 로직
  const newPost = {
    id: id++, // 어떻게 id가 설정되는지 확인하세요.
    gameId: gameId, // 새로운 gameId를 설정합니다.
    userId,
    title,
    optionA,
    optionB,
    likesA,
    likesB,
    comments,
  };

  postList[0].card.push(newPost);

  // 성공 메시지를 포함한 JSON 응답
  res.json({ success: true, card: newPost });
});
// PATCH 요청을 처리하는 라우트 추가
app.patch("/api/gamepost/posts/:gameId", (req, res) => {
  const { gameId } = req.params;
  const updatedGameData = req.body; // 업데이트할 게임 데이터

  // 게임 ID를 기반으로 해당 게임을 찾습니다.
  const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  // 게임 데이터를 업데이트합니다.
  Object.assign(game, updatedGameData);

  // 업데이트된 게임 데이터를 응답합니다.
  res.json(game);
});
// 좋아요 엔드포인트
app.post("/api/like/:gameId", (req, res) => {
  const { gameId } = req.params;
  const { option } = req.body;

  // gameId와 option을 기반으로 해당 게임을 찾습니다.
  const game = gameList.find((g) => g.gameId == gameId);

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  // option에 따라 좋아요 수를 증가시킵니다.
  if (option === "A") {
    game.likesA += 1;
  } else if (option === "B") {
    game.likesB += 1;
  } else {
    return res.status(400).json({ error: "Invalid option" });
  }

  res.json({ success: true, likesA: game.likesA, likesB: game.likesB });
});
// app.use(express.static(__dirname, +"build"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(
  "/react",
  express.static(path.join(__dirname, "../FE_with_react/build"))
);
app.set("port", process.env.PORT || 5000);
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../FE_with_react/build/index.html"));
});
app.get("/react", function (req, res) {
  res.sendFile(path.join(__dirname, "../FE_with_react/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../FE_with_react/build/index.html"));
});

app.listen(5000, () => {
  console.log("서버실행중임");
});
