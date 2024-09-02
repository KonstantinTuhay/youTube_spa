import { createSlice } from "@reduxjs/toolkit";

const getPreviousText = createSlice({
  name: "previousText",
  initialState: null,
  reducers: {
    getPreText: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getPreText } = getPreviousText.actions;
export default getPreviousText.reducer;
