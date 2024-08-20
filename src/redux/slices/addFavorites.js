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
  },
});

export const { addFavoriteMovie, edit } = addFavorites.actions;
export default addFavorites.reducer;
