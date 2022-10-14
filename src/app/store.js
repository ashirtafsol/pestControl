import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import basketReducer from "../features/counter/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
