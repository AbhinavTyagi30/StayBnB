/* import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PropertyStateType } from "../utils/propertyStateType";
import axios from "axios";

//initial property state

const initPropState: PropertyStateType = {
  isError: false,
  isLoading: false,
  data: [],
};

//propertyReducer

const propertyReducer = createSlice({
  name: "property",
  initPropState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getPropertyAsync.pending, (state) => {
        console.log("inLoading");
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getPropertyAsync.rejected, (state) => {
        console.log("inError");
        state.isError = true;
        state.isLoading = false;
      })
      .addCase(
        getPropertyAsync.fulfilled,
        (state, action: PayloadAction<PropertyStateType>) => {
          console.log("inSuccess");
          state.isLoading = false;
          state.isError = false;
          state.isAuth = true;
          state.user = action.payload;
        }
      );
  },
});

export const getPropertyAsync = createAsyncThunk(
  "property/getPropertyAsync",
  async (url: string) => {
    const response = await axios.get(url);
    console.log(response);
    const responseData = response.data;
    console.log(responseData);
    return responseData;
  }
);

export default propertyReducer.reducer;
 */
