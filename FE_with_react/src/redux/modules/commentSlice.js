import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

export const __getComment = createAsyncThunk(
  "GET_COMMENT",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${BACKEND_SERVER}/api/comments/${payload.gameId}`
      );
      return thunkAPI.fulfillWithValue(data.game[0]);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  comments: [],
  isLoading: false,
  error: null,
  isGlobalEditmode: false,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    clearComment: (state) => {
      state.data.content = "";
    },
    globalEditModeToggle: (state, action) => {
      state.isGlobalEditmode = action.payload;
    },
  },
  extraReducers: {
    [__getComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearComment, globalEditModeToggle } = commentSlice.actions;
export default commentSlice.reducer;
