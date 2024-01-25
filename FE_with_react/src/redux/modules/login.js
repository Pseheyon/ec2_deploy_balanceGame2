import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apis_token, cookie_instance } from "../../axios/api";
import { getCookie, removeCookie } from "../../cookie/cookie";

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
      removeCookie("refreshToken");
    },
  },
  extraReducers: {
    [__login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      const { accessToken, nickname } = action.payload;
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
