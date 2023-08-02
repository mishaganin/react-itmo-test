import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./features/newsSlice";
import languagesReducer from "./features/languagesSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    languages: languagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
