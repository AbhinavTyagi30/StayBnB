import { PropertyInterface } from "./propertyInterface";

export interface PropertyStateType {
  isError: boolean;
  isLoading: boolean;
  data: PropertyInterface[];
}
