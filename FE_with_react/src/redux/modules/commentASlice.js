import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
export const __getComments = createAsyncThunk(
  "GET_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      // const gameId = useParams();
      // console.log("댓글 조회 파람", gameId);
      const response = await axios.get(
        `${BACKEND_SERVER}/api/comments/${payload.gameId}`
      );
      console.log("data_A_댓글임", response.data);
      console.log("조회 gameId", payload.gameId);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      console.log("_A_Error fetching comments:", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCommentByCommendId = createAsyncThunk(
  "GET_COMMENT_BY_COMMENT_ID",
  async (payload, thunkAPI) => {
    try {
      const { gameId, option, commentId } = payload;
      const response = await axios.get(
        `${BACKEND_SERVER}/api/comments/${gameId}/${option}`
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      alert(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComments = createAsyncThunk(
  "ADD_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      console.log("코멘트 추가--->", payload);
      const response = await axios.post(
        `${BACKEND_SERVER}/api/comments/${payload.gameId}`,
        {
          commentId: payload.commentId,
          option: payload.option,
          content: payload.content,
        }
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updatedComment = createAsyncThunk(
  "UPDATE_COMMENTS",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.patch(
        `${BACKEND_SERVER}/api/comments${payload.gameId}/${payload.commentId}`,
        {
          commentId: payload.commentId,
          option: payload.option,
          content: payload.content,
        }
      );
      console.log("commentS.payloadA_ __updatedComment", payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(
        `${BACKEND_SERVER}/api/comments/${payload.gameId}/${payload.option}/${payload.commentId}`
      );
      return thunkAPI.fulfillWithValue(payload); // 삭제한 commentId 반환합니다.
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//바뀌는 데이터들은 요 안에 있는 값들만 바뀐다.
//state 값들은 여기서 적고 밑에 엑스트라에서
const initialState = {
  data: [],
  isLoading: false,
  reducers: {},
  error: null,
};

export const commentASlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("action.comments.dataAA", action.payload);
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComments.pending]: (state) => {
      state.isLoading = true;
    },

    // 댓글 조회 (todoId)
    [__getCommentByCommendId.pending]: (state) => {
      state.isLoading = true;
    },
    [__getCommentByCommendId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [__getCommentByCommendId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__addComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("action.comments.data->", action.payload);
      state.data.push(action.payload);
    },
    [__addComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updatedComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("card.action.payload-->", action.payload);
      const target = state.data.findIndex(
        (comment) => comment.commentId === action.payload.commentId
      );
      state.isLoading = false;
      state.data.splice(target, 1, action.payload);
    },
    [__updatedComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatedComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      const target = state.data.findIndex(
        (comment) => comment.commentId === action.payload.commentId
      );

      if (target !== -1) {
        state.data.splice(target, 1);
      }
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentASlice.actions;
export default commentASlice.reducer;
