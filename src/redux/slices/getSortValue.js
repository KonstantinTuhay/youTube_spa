import { createSlice } from "@reduxjs/toolkit";

export const getSortValue = createSlice({
  name: "getSortValue",
  initialState: "relevance",
  reducers: {
    getValueForSorting: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getValueForSorting } = getSortValue.actions;

export default getSortValue.reducer;
