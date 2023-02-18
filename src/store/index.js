import { todoSlice } from "./todoSlice";
import { authSlice } from "./auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    [todoSlice.name]: todoSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});