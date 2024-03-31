import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { authInitialState } from "./authReducer";
import axios from "axios";

import { UserStateType } from "../utils/userStateType";

//initial signupState

const initialState = authInitialState;

// signupReducer

const signupReducer = createSlice({
  name: "signup",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.pending, (state) => {
        console.log("inloading signup");
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(signupAsync.rejected, (state) => {
        console.log("inError signup");
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(
        signupAsync.fulfilled,
        (state, action: PayloadAction<UserStateType>) => {
          console.log("inSuccess signup");
          state.isLoading = false;
          state.isError = false;
          state.isAuth = true;
          state.user = action.payload;
        }
      );
  },
});

export const signupAsync = createAsyncThunk(
  "signup/signupAsync",
  async (data: UserStateType) => {
    const response = await axios.post(
      `https://staybnb-server.onrender.com/register`,
      data
    );
    console.log("response", response);
    const responseData = response.data;
    console.log("response data", responseData);
    console.log("response data user", responseData.user);
    return responseData?.user;
  }
);

export default signupReducer.reducer;
