import { createSlice } from "@reduxjs/toolkit";

export const getTextForSearch = createSlice({
  name: "textForSearch",
  initialState: "",
  reducers: {
    enterText: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { enterText } = getTextForSearch.actions;

export default getTextForSearch.reducer;
