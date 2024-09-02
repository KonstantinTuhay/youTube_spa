import { createSlice } from "@reduxjs/toolkit";

const getIdMovie = createSlice({
  name: "getId",
  initialState: null,
  reducers: {
    getId: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getId } = getIdMovie.actions;
export default getIdMovie.reducer;
