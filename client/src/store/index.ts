import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import lineReducer from "./underline/underline.slice";
import newsReducer from "./news/newsSlice";
export const store = configureStore({
  reducer: { lineReducer, newsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
