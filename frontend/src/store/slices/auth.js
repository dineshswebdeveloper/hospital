import { createSlice } from "@reduxjs/toolkit";
const authReducer = createSlice({
  name: "auth",
  initialState: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : { loading: false, isAuthorised: false },
  reducers: {
    authRequest: (state) => {
      return { ...state, loading: true };
    },
    authSuccess: (state, { payload }) => {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          loading: false,
          isAuthorised: true,
          user: payload,
        })
      );
      return {
        loading: false,
        isAuthorised: true,
        user: payload,
      };
    },
    authFail: (state, { payload }) => {
      return {
        loading: false,
        errMsg: payload,
      };
    },
    signout: () => {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          loading: false,
          isAuthorised: false,
        })
      );
      return {
        loading: false,
        isAuthorised: false,
      };
    },
  },
});
export const { authRequest, authSuccess, authFail, signout } =
  authReducer.actions;
export default authReducer.reducer;