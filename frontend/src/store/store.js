import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./slices/auth";
const reducer = combineReducers({
    authReducer
});
const store = configureStore({
  reducer,
  middleware: [thunk],
});
export default store;
