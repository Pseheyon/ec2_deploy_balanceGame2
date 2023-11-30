import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis_token } from "../../axios/api";
import axios from "axios";
const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

export const __updatedLikesA = createAsyncThunk(
  "UPDATE_LIKESA",
  async (payload, thunkAPI) => {
    try {
      console.log("payloadupdatLIke--", payload);
      const { data } = await apis_token.post(
        `${BACKEND_SERVER}/api/like/${payload.gameId}`,
        { option: "A" }
      );
      console.log("like.data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("like.error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __updatedLikesB = createAsyncThunk(
  "UPDATE_LIKESB",
  async (payload, thunkAPI) => {
    try {
      console.log("payloadupdatecomment--", payload);
      const { data } = await apis_token.post(
        `${BACKEND_SERVER}/api/like/${payload.gameId}`,
        { option: "B" }
      );
      console.log("like.payload", payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("like.error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  like: {
    likesA: 0,
    likesB: 0,
  },
  error: null,
  isLoading: false,
};

export const likeSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.card = {
        likesA: 0,
        likesB: 0,
      };
    },
  },
  extraReducers: {
    //   [__getCardThunk.fulfilled]: (state, action) => {
    //     state.isLoading = false
    //     state.card = action.payload
    //   },
    //   [__getCardThunk.rejected]: (state, action) => {
    //     state.isLoading = false
    //     state.error = action.payload
    //   },
    //   [__getCardThunk.pending]: (state) => {
    //     state.isLoading = true
    //   },
    [__updatedLikesA.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("card.action.payload-->", action.payload);
      state.card = action.payload;
    },
    [__updatedLikesA.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatedLikesA.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updatedLikesA.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("card.action.payload-->", action.payload);
      state.card = action.payload;
    },
    [__updatedLikesA.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatedLikesA.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearLike } = likeSlice.actions;
export default likeSlice.reducer;
