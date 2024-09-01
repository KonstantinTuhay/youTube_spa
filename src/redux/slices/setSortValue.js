import { createSlice } from "@reduxjs/toolkit";

export const setSortValue = createSlice({
  name: "setSortValue",
  initialState: "relevance",
  reducers: {
    setValueForSorting: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setValueForSorting } = setSortValue.actions;

export default setSortValue.reducer;
