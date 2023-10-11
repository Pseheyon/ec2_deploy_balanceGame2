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

// app.get("/api/gamepost/comments/:gameId", (req, res) => {
//   const { gameId } = req.params;

//   // gameId를 기반으로 해당 게임의 댓글을 가져옵니다.
//   const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

//   if (!game) {
//     return res.status(404).json({ error: "Game not found" });
//   }

//   const comments = game.comments; // 게임의 댓글 배열
//   res.json(comments);
// });
// // // ___________게시글의 댓글 추가___________
// app.post("/api/gamepost/comments/:gameId", (req, res) => {
//   const { gameId } = req.params;
//   const { content, option, userId } = req.body;

//   const game = postList[0].card.find((c) => c.id === parseInt(gameId));
//   if (!game) {
//     return res.status(404).json({ error: "Game not found" });
//   }

//   const comments = game.comments;
//   const newComment = {
//     commentId: comments.length + 1,
//     userId,
//     content,
//     option,
//   };

//   comments.push(newComment);

//   res.json(newComment);
// });

// // ___________게시글의 댓글 삭제___________
// app.delete("/api/gamepost/comments/:gameId/:option/:commentId", (req, res) => {
//   const { gameId, option, commentId } = req.params;

//   const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

//   if (!game) {
//     return res.status(404).json({ error: "Game not found" });
//   }

//   const comments = game.comments;

//   const commentIndex = comments.findIndex(
//     (c) => c.commentId === parseInt(commentId)
//   );

//   if (commentIndex === -1) {
//     return res.status(404).json({ error: "Comment not found" });
//   }

//   comments.splice(commentIndex, 1);

//   res.json({ success: true, message: "Comment deleted successfully" });
// });

// // ___________게시글의 댓글 수정___________
// app.patch("/api/gamepost/comments/:gameId/:commentId", (req, res) => {
//   const { gameId, option, commentId } = req.params;
//   const { content } = req.body;

//   const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

//   if (!game) {
//     return res.status(404).json({ error: "Game not found" });
//   }

//   const comments = game.comments;
//   const comment = comments.find((c) => c.commentId === parseInt(commentId));

//   if (!comment) {
//     return res.status(404).json({ error: "Comment not found" });
//   }

//   comment.content = content;

//   res.json({ success: true, message: "Comment updated successfully" });
// });

// app.get("/", function (req, res) {
//   res.send("helo world");
// });

// app.get("/api/gamepost", (req, res) => {
//   res.json(postList);
// });
// // ___________게시글의 데이터를 전송___________
// app.get("/api/gamepost/posts", (req, res) => {
//   res.json({ games: postList[0].card });
// });

// app.get("/api/gamepost/posts/:gameId", (req, res) => {
//   const { gameId } = req.params;

//   const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

//   if (!game) {
//     return res.status(404).json({ error: "Game not found" });
//   }

//   res.json(game);
// });

// let id = 2;
// //-----------------게시글 추가
// app.post("/api/gamepost/posts", (req, res) => {
//   const { userId, title, optionA, optionB, likesA, likesB, comments } =
//     req.body;

//   const gameId = postList[0].card.length + 1;

//   const newPost = {
//     id: id++,
//     gameId: gameId,
//     userId,
//     title,
//     optionA,
//     optionB,
//     likesA,
//     likesB,
//     comments,
//   };

//   postList[0].card.push(newPost);
//   res.json({ success: true, card: newPost });
// });
// // PATCH 요청을 처리하는 라우트 추가
// app.patch("/api/gamepost/posts/:gameId", (req, res) => {
//   const { gameId } = req.params;
//   const updatedGameData = req.body;

//   const game = postList[0].card.find((c) => c.gameId === parseInt(gameId));

//   if (!game) {
//     return res.status(404).json({ error: "Game not found" });
//   }

//   Object.assign(game, updatedGameData);

//   res.json(game);
// });

// // 좋아요 엔드포인트
// app.post("/api/like/:gameId", (req, res) => {
//   const { gameId } = req.params;
//   const { option } = req.body;

//   const game = gameList.find((g) => g.gameId == gameId);

//   if (!game) {
//     return res.status(404).json({ error: "Game not found" });
//   }

//   if (option === "A") {
//     game.likesA += 1;
//   } else if (option === "B") {
//     game.likesB += 1;
//   } else {
//     return res.status(400).json({ error: "Invalid option" });
//   }

//   res.json({ success: true, likesA: game.likesA, likesB: game.likesB });
// });

// app.use("/", express.static(path.join(__dirname, "public")));
// app.use(
//   "/react",
//   express.static(path.join(__dirname, "../FE_with_react/build"))
// );
// app.set("port", process.env.PORT || 5001);
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../FE_with_react/build/index.html"));
// });
// app.get("/react", function (req, res) {
//   res.sendFile(path.join(__dirname, "../FE_with_react/build/index.html"));
// });

// app.get("*", function (req, res) {
//   res.sendFile(path.resolve(__dirname, "../FE_with_react/build/index.html"));
// });

// app.listen(app.get("port"), () => {
//   console.log(app.get("port"), "번 포트에서 대기중..");
// });

require("dotenv").config(); // .env 파일에서 환경변수 불러오기
const { PORT, MONGO_URI } = process.env;
const express = require("express");
const users = require("./models/users");
const app = express();
const gamesRouter = express.Router();

app.use("/api", express.json(), gamesRouter);
app.use(express.urlencoded({ extended: false }));

gamesRouter.get("/", (req, res) => {
  res.send("hi! 라우터로 됨");
});

const user = require("./models/users");

//creater useres
app.post("/users", (req, res) => {
  const { userId, nikname, password, cofirmpassword } = req.body;
  user.push;
  return res.send(users);
});
//read users
app.get("/users/:userId?", (req, res) => {
  const { userId } = req.params;

  if (userId) {
    for (let i = 0; i < user.length; i++) {
      if (user[i].userId == userId) {
        return res.send(user[i]);
      }
    }
    return res.status(404).send("사용자정보를 찾을 수 없습니다.");
  }
  return res.sendStatus(user);
});
//delete users
app.delete("/users/:userId", (req, res) => {
  for (let i = 0; i < user.length; i++) {
    if (user[i].userId == req.params.userId) {
      user.splice(i, 1);
      return res.send(user);
    }
  }
  return res.status(404).send("사용자정보를 찾을 수 없습니다.");
});

app.set("port", process.env.MONGO_URI || 8080);
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 서버켜짐");
});
