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
export const __login = createAsyncThunk(
  "login/login",
  async (payload, thunkAPI) => {
    try {
      const response = await apis_token.post(
        "/login",
        {
          nickname: payload.nickname,
          password: payload.password,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const token = response.headers.authorization.split(" ")[1];
      //localStorage.setItem("token", token);
      localStorage.setItem("token", token);

      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      alert(error.response.data.errorMessage);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [__login.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default loginSlice.reducer;
