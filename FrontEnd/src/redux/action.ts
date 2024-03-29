import { UserStateType } from "../utils/authStateType";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./actionTypes";

export const loginLoading = () => {
  return { type: LOGIN_LOADING };
};

export const loginError = () => {
  return { type: LOGIN_ERROR };
};

export const loginSuccess = (payload: UserStateType) => {
  return { type: LOGIN_SUCCESS, payload };
};

// export const login =
//   (data: LoginStateInterface) => async (dispatch: Dispatch) => {
//     dispatch(loginLoading());
//     try {
//       const response = await axios.post(
//         `https://staybnb-server.onrender.com/login`,
//         data
//       );

//       if (response.status === 200) {
//         const responseData = response.data;
//         console.log(responseData);
//         dispatch(loginSuccess(responseData.user));
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch(loginError());
//     }
//   };
