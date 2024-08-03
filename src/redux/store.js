import { configureStore } from "@reduxjs/toolkit";
import { apiGetMovies } from "./apiGetMovies";
import getSlice from "./slices/getSlice";

export const store = configureStore({
  reducer: {
    getMoviesSlice: getSlice,
    [apiGetMovies.reducerPath]: apiGetMovies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiGetMovies.middleware),
});
