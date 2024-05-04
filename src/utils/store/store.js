import { configureStore, createSlice } from "@reduxjs/toolkit";
import userSlice from "../reducer/userReducer";
import { thunk } from "redux-thunk";
import apiMiddleware from "../middleware/apiMiddleware";
import productSlice from "../reducer/productReducer";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    product: productSlice.reducer
  },
  middleware: () => [thunk, apiMiddleware]
});
