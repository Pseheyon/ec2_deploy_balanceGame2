import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { cookie_instance } from "../../axios/api";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

export const __getCardThunk = createAsyncThunk(
  "GET_CARD",
  async (payload, thunkAPI) => {
    try {
      const response = await cookie_instance.get(
        `${BACKEND_SERVER}/api/games/${payload.gameId}`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updatedCardThunk = createAsyncThunk(
  "UPDATE_CARD",
  async (payload, thunkAPI) => {
    const { gameId, optionA, optionB, title, userNic, _id } = payload;

    try {
      await cookie_instance.patch(
        `${BACKEND_SERVER}/api/games/${payload.gameId}`,
        {
          gameId,
          optionA,
          title,
          optionB,
          userNic,
          _id,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __addCardThunk = createAsyncThunk(
  "ADD_CARD",
  async (payload, thunkAPI) => {
    try {
      const userNic = localStorage.getItem("localNickName");

      const response = await cookie_instance.post(
        `${BACKEND_SERVER}/api/games`,
        {
          title: payload.title,
          optionA: payload.optionA,
          optionB: payload.optionB,
          userNic: userNic,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  card: {
    id: 0,
    gameId: 0,
    userNic: "",
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
        userNic: "",
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
    },
    [__addCardThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updatedCardThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
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
