import { configureStore } from "@reduxjs/toolkit";
import { apiGetMovies } from "./apiMovies";
import addFavorites from "./slices/addFavorites";
import changesColors from "./slices/changesColors";
import getSlice from "./slices/textSlice";
import removeSlices from "./slices/removeSlices";

export const store = configureStore({
  reducer: {
    getSlice: getSlice,
    changesColors: changesColors,
    removeSlices: removeSlices,
    addFavorites: addFavorites,
    [apiGetMovies.reducerPath]: apiGetMovies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiGetMovies.middleware),
});
