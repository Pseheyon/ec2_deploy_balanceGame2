// const PORT = process.env.PORT || 5000;
// const express = require("express");
// const path = require("path");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const { configDotenv } = require("dotenv");
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const postList = [
//   {
//     card: [
//       {
//         id: 1,
//         gameId: 1,
//         userId: "user1",
//         title: "깻잎논쟁!",
//         optionA: "깻잎정도 떼줄 수 있는 거 아니야?",
//         optionB: "깻잎 떼주다가 다른 것도 떼줄 지 어떻게 알아?",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "빨리먹기위한 계획을 몰라보다니",
//             option: "A",
//             userId: "user1A",
//           },
//           {
//             commentId: 2,
//             content: "빨리먹다가 빨리헤어지는 수가 있다!",
//             option: "B",
//             userId: "user2B",
//           },
//           {
//             commentId: 3,
//             //GameId: "${gameId}-{commentId}",
//             content: "깻잎 떼주는게 뭔 대수라고!",
//             option: "A",
//             userId: "user3A",
//           },
//           {
//             commentId: 4,
//             content: "뇌과학자님이 안된다고 함",
//             option: "B",
//             userId: "user4B",
//           },
//           {
//             commentId: 5,
//             //GameId: "${gameId}-{commentId}",
//             content: "친구 챙겨주는게 더 애인 기 살려주는거 아냐?",
//             option: "A",
//             userId: "userA5",
//           },
//           {
//             commentId: 6,
//             content: "맞는말 처 맞는말@@@!!!",
//             option: "B",
//             userId: "user1",
//           },
//           {
//             commentId: 7,
//             //GameId: "${gameId}-{commentId}",
//             content: "상관ㄴ",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 8,
//             content: "어의 없네!! 떼주지마 말라고!!차라리 나도 떼주지마!",
//             option: "B",
//             userId: "user1",
//           },
//           {
//             commentId: 9,
//             //GameId: "${gameId}-{commentId}",
//             content: "떼도 돼!! 어차피 난 없으니깐!! 있을 수가 없거든,,",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 10,
//             content: "이럴꺼면 헤어져!",
//             option: "B",
//             userId: "user1",
//           },
//           {
//             commentId: 11,
//             //GameId: "${gameId}-{commentId}",
//             content: "그 정도도 못 믿으면서 어떻게 연애를 합니까....",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 12,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           {
//             commentId: 13,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 14,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           {
//             commentId: 15,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 16,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           {
//             commentId: 17,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 18,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           {
//             commentId: 19,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 20,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           {
//             commentId: 21,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 22,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 2,
//         gameId: 2,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 3,
//         gameId: 3,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 4,
//         gameId: 4,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 5,
//         gameId: 5,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 6,
//         gameId: 6,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 7,
//         gameId: 7,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 8,
//         gameId: 8,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 9,
//         gameId: 9,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 10,
//         gameId: 10,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 11,
//         gameId: 11,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 12,
//         gameId: 12,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 13,
//         gameId: 13,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 14,
//         gameId: 14,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 15,
//         gameId: 15,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 16,
//         gameId: 16,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 17,
//         gameId: 17,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 18,
//         gameId: 18,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 19,
//         gameId: 19,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 20,
//         gameId: 20,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 21,
//         gameId: 21,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 22,
//         gameId: 22,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 23,
//         gameId: 23,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 24,
//         gameId: 24,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 25,
//         gameId: 25,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 26,
//         gameId: 26,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 27,
//         gameId: 27,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 28,
//         gameId: 28,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 29,
//         gameId: 29,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 30,
//         gameId: 30,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 31,
//         gameId: 31,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 32,
//         gameId: 32,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 33,
//         gameId: 33,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 34,
//         gameId: 34,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 35,
//         gameId: 35,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 36,
//         gameId: 36,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 37,
//         gameId: 37,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 38,
//         gameId: 38,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 39,
//         gameId: 39,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 40,
//         gameId: 40,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 41,
//         gameId: 41,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 42,
//         gameId: 42,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 43,
//         gameId: 43,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 44,
//         gameId: 44,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 45,
//         gameId: 45,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 46,
//         gameId: 46,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 47,
//         gameId: 47,
//         userId: "user1",
//         title: "속담이다!",
//         optionA: "빨간색 휴지",
//         optionB: "파란색 휴지",
//         likesA: 10,
//         likesB: 5,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             //GameId: "${gameId}-{commentId}",
//             content: "첫번째 게임 Comment for Option A",
//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "첫번째 게임 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//           // 다른 댓글들
//         ],
//       },
//       {
//         id: 48,
//         gameId: 48,
//         userId: "user2",
//         title: "뭐 안먹을래?",
//         optionA: "평생 라면 안먹기",
//         optionB: "평생 탄산 안먹기2",
//         likesA: 15,
//         likesB: 8,
//         GameImg: "http://localhost:3000/react/images/gameImg-1.png",
//         comments: [
//           {
//             commentId: 1,
//             content: "두번째 Comment for Option A",

//             option: "A",
//             userId: "user1",
//           },
//           {
//             commentId: 2,
//             content: "두번째 Comment for Option B",
//             option: "B",
//             userId: "user1",
//           },
//         ],
//       },
//     ],
//     users: [
//       {
//         id: 1,
//         nickname: "john",
//         password: "hashed_password_123",
//         confirmPassword: "hashed_password_123",
//       },
//       {
//         id: 2,
//         nickname: "jane",
//         password: "hashed_password_456",
//         confirmPassword: "hashed_password_456",
//       },
//     ],
//   },
// ];

require("dotenv").config(); // .env 파일에서 환경변수 불러오기

const express = require("express");
const app = express();
const users = require("./models/users");

const { PORT, MONGO_URI } = process.env;

const ro = express.Router();
const indexRouter = require("./routes/index");

app.use("/api", express.json(), [indexRouter]);
app.use(express.urlencoded({ extended: false }));

ro.get("/", (req, res) => {
  res.send("hi! 라우터로 됨");
});

app.set("port", process.env.MONGO_URI || 8080);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 서버켜짐");
});
