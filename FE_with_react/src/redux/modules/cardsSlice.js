import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookie_instance } from "../../axios/api";
const BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;

export const __getCardsThunk = createAsyncThunk(
  "GET_CARDS",
  async (_, thunkAPI) => {
    try {
      const { data } = await cookie_instance.get(
        `${BACKEND_SERVER}/api/games`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return thunkAPI.fulfillWithValue({ data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  cards: [],
  error: null,
  isLoading: false,
  isError: false,
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
  extraReducers: {
    [__getCardsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.cards = action.payload.data;
      console.log("action_cardsSlice.payload하,,,-->", action.payload);
    },
    [__getCardsThunk.rejected]: (state, action) => {
      state.isLoading = false;

      state.isError = true;
      state.error = action.payload;
    },
    [__getCardsThunk.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
  },
});
export const {} = cardsSlice.actions;
export default cardsSlice.reducer;
