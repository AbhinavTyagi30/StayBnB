// import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import { authReducer } from "./authReducer";
// import { thunk } from "redux-thunk";

// const rootReducer = combineReducers({ auth: authReducer });

// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
