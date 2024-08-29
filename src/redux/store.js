import { configureStore } from "@reduxjs/toolkit";
import { apiGetMovies } from "./apiMovies";
import addEditRemoveFavorites from "./slices/addEditRemoveFavorites";
import changesColors from "./slices/changesColors";
import getTextForSearch from "./slices/getTextForSearch";
import getIdMovie from "./slices/getIdMovie";
import getPreviousText from "./slices/getPreviousText";
import switchCards from "./slices/switchCards";
import getTextFromInput from "./slices/getTextFromInput";
import getItemSlider from "./slices/getItemSlider";

export const store = configureStore({
  reducer: {
    getItemSlider: getItemSlider,
    getTextFromInput: getTextFromInput,
    getTextForSearch: getTextForSearch,
    switchCards: switchCards,
    changesColors: changesColors,
    addEditRemoveFavorites: addEditRemoveFavorites,
    getIdMovie: getIdMovie,
    getPreviousText: getPreviousText,
    [apiGetMovies.reducerPath]: apiGetMovies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiGetMovies.middleware),
});
