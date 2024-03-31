import { UserStateType } from "./userStateType";

export interface AuthStateType {
  isAuth: boolean;
  user: UserStateType;
  isError: boolean;
  isLoading: boolean;
}
