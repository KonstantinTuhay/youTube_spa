import { createSlice } from "@reduxjs/toolkit";

export const getItemSlider = createSlice({
  name: "getItemSlider",
  initialState: 24,
  reducers: {
    getCurrentItemSlider: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getCurrentItemSlider } = getItemSlider.actions;

export default getItemSlider.reducer;
