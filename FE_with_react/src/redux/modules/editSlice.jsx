import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const BACKEND_SERVER = "http://localhost:5000";
const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
// __getCardThunk
export const __getCardThunk = createAsyncThunk(
  "GET_CARD",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BACKEND_SERVER}/api/gamepost/posts/${payload.gameId}`
      );
      console.log("조회시데이터--->", response.data);
      return thunkAPI.fulfillWithValue(response.data); // 데이터 전체를 반환
    } catch (error) {
      console.log("조회시데이터error--->", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// __updatedCardThunk
export const __updatedCardThunk = createAsyncThunk(
  "UPDATE_CARD",
  async (payload, thunkAPI) => {
    const { gameId, optionA, optionB, likesA, likesB, title, GameImg } =
      payload; // payload에서 gameId 추출

    try {
      await axios.patch(
        `${BACKEND_SERVER}/api/gamepost/posts/${payload.gameId}`, // gameId를 URL에 추가
        {
          gameId,
          optionA,
          title,
          optionB,
          likesA,
          likesB,
          GameImg,
        }
      );
      console.log("업데이트데이터--->", payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log("업데이트데이터error--->", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __addCardThunk = createAsyncThunk(
  "ADD_CARD",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BACKEND_SERVER}/api/gamepost/posts`,
        {
          title: payload.title,
          optionA: payload.optionA,
          optionB: payload.optionB,
        }
        // payload에 추가할 게시물 정보를 담아 전달
      );
      console.log("추가된 데이터--->", response.data);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("데이터 추가 에러--->", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// title: "",
//     optionA: "",
//     optionB: "",

const initialState = {
  card: {
    id: 0,
    gameId: 0,
    userId: 0,
    title: "",
    optionA: "",
    optionB: "",
    GameImg: "",
  },
  error: null,
  isLoading: false,
};
export const editSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.card = {
        id: 0,
        gameId: 0,
        userId: 0,
        title: "",
        optionA: "",
        optionB: "",
        GameImg: "",
      };
    },
  },
  extraReducers: {
    [__getCardThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.card = action.payload;
    },
    [__getCardThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getCardThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__addCardThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("action.__addCardThunk.data->", action.payload);
      state.data.push(action.payload);
    },
    [__addCardThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updatedCardThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("card.action.payload-->", action.payload);
      state.card = action.payload;
    },
    [__updatedCardThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatedCardThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { clearCard } = editSlice.actions;
export default editSlice.reducer;
