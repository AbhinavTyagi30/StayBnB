import { PropertyInterface } from "./propertyInterface";

export interface UserStateType {
  email: string;
  password: string;
  name: string;
  favorite: PropertyInterface[];
  isAdmin: boolean;
  id: string;
}

export interface AuthStateType {
  isAuth: boolean;
  user: UserStateType;
  isError: boolean;
  isLoading: boolean;
}
