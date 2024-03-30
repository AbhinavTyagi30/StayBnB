// import { AuthActionType } from "../utils/authActionType";
// import { AuthReducerType } from "../utils/authReducerType";
// import { AuthStateType } from "../utils/authStateType";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStateType, UserStateType } from "../utils/authStateType";
import { LoginStateInterface } from "../utils/LoginStateInterface";
import axios from "axios";

// import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

// //initial authState
// const initialAuthState: AuthStateType = {
//   isAuth: false,
//   user: {
//     email: "",
//     password: "",
//     name: "",
//     favorite: [],
//     isAdmin: false,
//     id: "",
//   },
//   isError: false,
//   isLoading: false,
// };

// // AuthReducer
// export const authReducer: AuthReducerType = (
//   state: AuthStateType = initialAuthState,
//   { type, payload }: AuthActionType
// ) => {
//   switch (type) {
//     case LOGIN_LOADING:
//       return { ...state, isLoading: true, isError: false };

//     case LOGIN_ERROR:
//       return { ...state, isLoading: false, isError: true };

//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         isAuth: true,
//         user: { ...state.user, ...payload },
//       };
//     default:
//       return state;
//   }
// };

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

// AuthReducer

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // loginLoading: (state) => {
    //   state.isLoading = true;
    //   state.isError = false;
    // },
    // loginError: (state) => {
    //   state.isLoading = false;
    //   state.isError = true;
    // },
    // loginSuccess: (state, action: PayloadAction<UserStateType>) => {
    //   state.isLoading = false;
    //   state.isError = false;
    //   state.isAuth = true;
    //   state.user = action.payload;
    // },
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
        state.isLoading = false;
        state.isError = true;
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

// export const { loginLoading, loginError, loginSuccess } = authReducer.actions;

export default authReducer.reducer;
