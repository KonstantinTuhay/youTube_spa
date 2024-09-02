import { createSlice } from "@reduxjs/toolkit";

export const getTextFromInput = createSlice({
  name: "textFromInput",
  initialState: "",
  reducers: {
    getText: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getText } = getTextFromInput.actions;

export default getTextFromInput.reducer;
