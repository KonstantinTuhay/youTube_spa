import { createSlice } from "@reduxjs/toolkit";

const addFavorites = createSlice({
  name: "favoriteMovies",
  initialState: [],
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.push(action.payload);
      console.log(state);
    },
    remove: (state, action) => {
      console.log(action);
      console.log(state);
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addFavoriteMovie, remove } = addFavorites.actions;
export default addFavorites.reducer;
