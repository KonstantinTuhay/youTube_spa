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
import switchDayNight from "./slices/switchDayNight";

export const store = configureStore({
  reducer: {
    getItemSlider: getItemSlider,
    sendItemSlider: sendItemSlider,
    getSortValue: getSortValue,
    setSortValue: setSortValue,
    divideFeatureForModal: divideFeatureForModal,
    switchDayNight: switchDayNight,
    switchCards: switchCards,
    getTextFromInput: getTextFromInput,
    getTextForSearch: getTextForSearch,
    changesColors: changesColors,
    getIdMovie: getIdMovie,
    getPreviousText: getPreviousText,
    addEditRemoveFavorites: addEditRemoveFavorites,
    [apiGetMovies.reducerPath]: apiGetMovies.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiGetMovies.middleware),
});
