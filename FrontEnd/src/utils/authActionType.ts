import { AuthStateType } from "./authStateType";

export interface AuthActionType {
  type: string;
  payload?: AuthStateType;
}
