import { AuthActionType } from "../utils/authActionType";
import { AuthStateType } from "../utils/authStateType";
import { AuthReducerType } from "../utils/authReducerType";

const initState: AuthStateType = {
  email: "",
  password: "",
};

export const authReducer: AuthReducerType = (
  state: AuthStateType = initState,
  { type, payload }: AuthActionType
) => {
  switch (type) {
    default:
      return state;
  }
};
