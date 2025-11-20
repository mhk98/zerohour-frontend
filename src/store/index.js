import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      news: newsReducer,
    },
  });
};


