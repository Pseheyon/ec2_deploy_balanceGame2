import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis_token } from "../../axios/api";
const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
const initialState = {
  users: [
    {
      nickname: null,
      password: null,
      confirmPassword: null,
      email: null,
    },
  ],
  isLoading: false,
  isError: false,
  error: null,
};

export const __signup = createAsyncThunk(
  "signup/signup",
  async (payload, thunkAPI) => {
    try {
      const response = await apis_token.post(
        `${BACKEND_SERVER}api/user/signup`,
        {
          userId: payload.userId,
          nickname: payload.nickname,
          password: payload.password,
          confirmPassword: payload.confirmPassword,
          email: payload.email,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      alert(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [__signup.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__signup.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    },
    [__signup.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default signupSlice.reducer;
