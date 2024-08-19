import { createSlice } from "@reduxjs/toolkit";

const addFavorites = createSlice({
  name: "favoriteMovies",
  initialState: [],
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.push(action.payload);
    },
    edit: (state, action) => {
      console.log(action.payload);
      const editMovie = state.find((movie) => movie.id === action.payload.id);
      // console.log(state);
      console.log(editMovie.text);
      if (editMovie) {
        editMovie.text = action.payload.text;
        console.log(editMovie.text);
      }
    },
  },
});

export const { addFavoriteMovie, edit } = addFavorites.actions;
export default addFavorites.reducer;
