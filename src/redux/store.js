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
import divideFeatureForModal from "./slices/divideFeatureForModal";
import sendItemSlider from "./slices/sendItemSlider";
import setSortValue from "./slices/setSortValue";
import getSortValue from "./slices/getSortValue";

export const store = configureStore({
  reducer: {
    getItemSlider: getItemSlider,
    getSortValue: getSortValue,
    setSortValue: setSortValue,
    sendItemSlider: sendItemSlider,
    divideFeatureForModal: divideFeatureForModal,
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
