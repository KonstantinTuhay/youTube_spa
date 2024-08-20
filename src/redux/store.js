import { configureStore } from "@reduxjs/toolkit";
import { apiGetMovies } from "./apiMovies";
import addFavorites from "./slices/addFavorites";
import changesColors from "./slices/changesColors";
import getSlice from "./slices/textSlice";
import editIdSlice from "./slices/editIdSlice";
import editPreviousText from "./slices/editPreviousText";

export const store = configureStore({
  reducer: {
    getSlice: getSlice,
    changesColors: changesColors,
    addFavorites: addFavorites,
    editIdSlice: editIdSlice,
    editPreviousText: editPreviousText,
    [apiGetMovies.reducerPath]: apiGetMovies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiGetMovies.middleware),
});
