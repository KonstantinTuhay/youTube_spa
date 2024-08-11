import { configureStore } from "@reduxjs/toolkit";
import { apiGetMovies } from "./apiMovies";
import getSlice from "./slices/textSlice";

export const store = configureStore({
  reducer: {
    getSlice: getSlice,
    [apiGetMovies.reducerPath]: apiGetMovies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiGetMovies.middleware),
});
