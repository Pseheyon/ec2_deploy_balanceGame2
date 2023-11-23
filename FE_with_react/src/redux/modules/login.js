import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apis_token, cookie_instance } from "../../axios/api";
import { getCookie } from "../../cookie/cookie";

const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

const initialState = {
  users: [
    {
      nickname: null,
      password: null,
      confirmPassword: null,
    },
  ],
  isLoading: false,
  isError: false,
  error: null,
};

export const __login = createAsyncThunk(
  "login/login",
  async (payload, thunkAPI) => {
    try {
      const response = await cookie_instance.post(
        `${BACKEND_SERVER}/api/user/login`,
        {
          userId: payload.userId,
          password: payload.password,
        }
      );
      console.log("로그인 페이로드", payload);
      return response.data;
    } catch (error) {
      alert(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log("로그인 성공", action.payload);
      const { accessToken, nickname } = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.users = [
        {
          nickname: null,
          password: null,
          confirmPassword: null,
        },
      ];
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: {
    [__login.pending]: (state, action) => {
      state.isLoading = true;
      console.log("로그인팬딩", action.payload);
    },
    [__login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      console.log("로그인풀필드", action.payload);
      const { accessToken, nickname } = action.payload;
      console.log("nickname", nickname);
      state.users[0].nickname = nickname;
      state.users[0].accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken);
    },
    [__login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});
export const { loginSuccess, logoutSuccess } = loginSlice.actions;
export default loginSlice.reducer;
