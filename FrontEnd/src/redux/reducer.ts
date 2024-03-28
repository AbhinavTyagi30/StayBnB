import { AuthActionType } from "../utils/authActionType";
import { AuthReducerType } from "../utils/authReducerType";
import { AuthStateType } from "../utils/authStateType";

import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

//initial authState
const initState: AuthStateType = {
  email: "",
  password: "",
};

// AuthReducer
export const authReducer: AuthReducerType = (
  state: AuthStateType = initState,
  { type }: AuthActionType
) => {
  switch (type) {
    case LOGIN_LOADING:
      return state;

    case LOGIN_ERROR:
      return state;

    case LOGIN_SUCCESS:
      return state;
    default:
      return state;
  }
};
