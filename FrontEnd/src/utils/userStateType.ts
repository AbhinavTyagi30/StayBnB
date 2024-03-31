import { PropertyInterface } from "./propertyInterface";

export interface UserBasicStateType {
  name: string;
  email: string;
  password: string;
}

export interface UserStateType extends UserBasicStateType {
  favorite: PropertyInterface[];
  isAdmin: boolean;
  id: string;
}
