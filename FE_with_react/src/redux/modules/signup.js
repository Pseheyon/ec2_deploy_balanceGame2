import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apis_token } from "../../axios/api";

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

export const __signup = createAsyncThunk(
  "signup/signup",
  async (payload, thunkAPI) => {
    try {
      console.log("payload", payload);
      const response = await apis_token.post(
        "/signup",
        {
          nickname: payload.nickname,
          password: payload.password,
          confirmPassword: payload.confirmPassword,
        },
        {
          // headers: {
          //   // Authorization: `Bearer ${localStorage.getItem("token")}`,
          // },
        }
      );
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      alert(error.response.data.errorMessage);
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
//export const {} = signupSlice.actions;
export default signupSlice.reducer;
