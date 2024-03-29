import { AuthActionType } from "../utils/authActionType";
import { AuthReducerType } from "../utils/authReducerType";
import { AuthStateType } from "../utils/authStateType";

import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

//initial authState
const initState: AuthStateType = {
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
export const authReducer: AuthReducerType = (
  state: AuthStateType = initState,
  { type, payload }: AuthActionType
) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...state, isLoading: true, isError: false };

    case LOGIN_ERROR:
      return { ...state, isLoading: false, isError: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        user: { ...state.user, ...payload },
      };
    default:
      return state;
  }
};
