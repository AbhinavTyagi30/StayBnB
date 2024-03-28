import { AuthActionType } from "../utils/authActionType";
import { AuthStateType } from "../utils/authStateType";
import { AuthReducerType } from "../utils/authReducerType";

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
    default:
      return state;
  }
};
