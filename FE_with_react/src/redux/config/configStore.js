import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signup";
import login from "../modules/login";
import cards from "../modules/cardsSlice";
import card from "../modules/editSlice";
import comments from "../modules/commentASlice";
import comment from "../modules/commentSlice";
import likes from "../modules/likeSlice";

const store = configureStore({
  reducer: {
    signup: signup,
    login: login,
    cards,
    card,
    comments,
    comment,
    likes,
  }, // 다음이 middleware 추가 코드이다.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // 기본 값이 true지만 배포할때 코드를 숨기기 위해서 false로 변환하기 쉽게 설정에 넣어놨다.
  devTools: true,
});

export default store;
