import axios from "axios";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";
import { LoginStateInterface } from "../utils/LoginStateInterface";
import { Dispatch } from "redux";

export const login = (data: LoginStateInterface) => {
  console.log("action:", data);

  return async (dispatch: Dispatch) => {
    dispatch({ type: LOGIN_LOADING });

    try {
      const response = await axios.post(
        `https://staybnb-server.onrender.com/login`,
        data
      );
      if (response.status === 200) {
        // console.log(response.data);
        const responseData = response.data;
        dispatch({ type: LOGIN_SUCCESS, payload: responseData.user });
      }
    } catch (error) {
      console.log(error);

      dispatch({ type: LOGIN_ERROR });
    }
  };
};
