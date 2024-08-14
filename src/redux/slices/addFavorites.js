import { createSlice } from "@reduxjs/toolkit";

const addFavorites = createSlice({
  name: "favoriteMovies",
  initialState: [],
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addFavoriteMovie } = addFavorites.actions;
export default addFavorites.reducer;
