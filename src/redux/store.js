import { configureStore } from "@reduxjs/toolkit";
import { apiGetMovies } from "./apiMovies";
import addFavorites from "./slices/addFavorites";
import changesColors from "./slices/changesColors";
import getSlice from "./slices/textSlice";

export const store = configureStore({
  reducer: {
    getSlice: getSlice,
    changesColors: changesColors,
    addFavorites: addFavorites,
    [apiGetMovies.reducerPath]: apiGetMovies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiGetMovies.middleware),
});
