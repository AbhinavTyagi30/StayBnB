import { UserBasicStateType } from "./userStateType";

export interface SignupStateInterface extends UserBasicStateType {
  confirmPassword: string;
  agree_term: boolean;
}
