import { AuthActionType } from "./authActionType";
import { AuthStateType } from "./authStateType";

export type AuthReducerType = (
  state: AuthStateType,
  action: AuthActionType
) => AuthStateType;
