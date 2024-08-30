import { createSlice } from "@reduxjs/toolkit";

const addEditRemoveFavorites = createSlice({
  name: "favoriteMovies",
  initialState: [],
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.push(action.payload);
    },
    edit: (state, action) => {
      const editMovie = state.find((movie) => movie.id === action.payload.id);
      if (editMovie) {
        editMovie.text = action.payload.text;
        editMovie.maxQuantity = action.payload.maxQuantity;
      }
    },
    remove: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addFavoriteMovie, remove, edit } =
  addEditRemoveFavorites.actions;

export default addEditRemoveFavorites.reducer;
