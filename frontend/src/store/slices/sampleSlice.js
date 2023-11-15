import { createSlice } from "@reduxjs/toolkit";
const sampleReducer = createSlice({
  name: "sample",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { loading: false, isAuthorised: false },
  reducers: {
    sampleRequest: (state) => {
      return { ...state, loading: true };
    },
    sampleSuccess: (state, { payload }) => {
      localStorage.setItem(
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
    sampleFail: (state, { payload }) => {
      return {
        loading: false,
        error: payload,
      };
    },
    signout: () => {
      localStorage.setItem(
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
export const { sampleRequest, sampleSuccess, sampleFail, signout } =
  sampleReducer.actions;
export default sampleReducer.reducer;