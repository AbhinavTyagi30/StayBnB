import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStateType } from "../utils/authStateType";
import { LoginStateInterface } from "../utils/LoginStateInterface";
import axios from "axios";
import { UserStateType } from "../utils/userStateType";

//initial authState
const initialState: AuthStateType = {
  isAuth: false,
  user: {
    email: "",
    password: "",
    name: "",
    favorite: [],
    isAdmin: false,
    id: "",
  },
  isError: false,
  isLoading: false,
};

export { initialState as authInitialState };

// AuthReducer

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserStateType>) => {
      state.isAuth = true;
      state.isError = false;
      state.isLoading = false;
      state.user = action.payload;
    },

    logout: (state, action: PayloadAction<AuthStateType>) => {
      state = { ...action.payload };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        console.log("inLoading");
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginAsync.rejected, (state) => {
        console.log("inError");
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(
        loginAsync.fulfilled,
        (state, action: PayloadAction<UserStateType>) => {
          console.log("inSuccess");
          state.isLoading = false;
          state.isError = false;
          state.isAuth = true;
          state.user = action.payload;
        }
      );

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

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async (data: LoginStateInterface) => {
    const response = await axios.post(
      `https://staybnb-server.onrender.com/login`,
      data
    );
    console.log(response);
    const responseData = response.data;
    console.log(responseData);
    console.log(responseData.user);
    return responseData?.user;
  }
);

export const signupAsync = createAsyncThunk(
  "auth/signupAsync",
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

export default authReducer.reducer;
