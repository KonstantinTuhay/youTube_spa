import { createSlice } from "@reduxjs/toolkit";

const addFavorites = createSlice({
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
      }
    },
    remove: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addFavoriteMovie, remove, edit } = addFavorites.actions;

export default addFavorites.reducer;
