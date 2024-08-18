import { createSlice } from "@reduxjs/toolkit";

const addFavorites = createSlice({
  name: "favoriteMovies",
  initialState: [],
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addFavoriteMovie, remove } = addFavorites.actions;
export default addFavorites.reducer;
