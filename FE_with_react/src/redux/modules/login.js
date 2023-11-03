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
      const refreshToken = getCookie("refreshToken");
      const response = await cookie_instance.post(
        `${BACKEND_SERVER}/api/user/login`,
        {
          nickname: payload.nickname,
          password: payload.password,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${payload.accessToken}`,
        //     // Cookie: `${refreshToken}`, // accessToken을 Authorization 헤더에 추가
        //   },
        // }
      );
      console.log("로그인 페이로드", payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      alert(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [__login.pending]: (state, action) => {
      state.isLoading = true;
      console.log("로그인팬딩", action.payload);
    },
    [__login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      console.log("로그인풀필드", action.payload);
      const { accessToken } = action.payload.data;
      localStorage.setItem("localAccessToken", accessToken);
    },
    [__login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default loginSlice.reducer;
