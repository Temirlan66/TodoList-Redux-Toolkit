import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isAuthrized: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getLogIn(state, action) {
      state.email = action.payload;
      state.isAuthrized = true;
    },

    getLogOut(state) {
      state = initialState;
    },
  },
});

export const authAction = authSlice.actions;
