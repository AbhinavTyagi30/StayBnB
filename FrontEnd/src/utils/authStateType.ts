import { PropertyInterface } from "./propertyInterface";

export interface AuthStateType {
  isAuth: boolean;
  user: {
    email: string;
    password: string;
    name: string;
    favorite: PropertyInterface[];
    isAdmin: boolean;
    id: string;
  };
  isError: boolean;
  isLoading: boolean;
}
