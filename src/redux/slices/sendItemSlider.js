import { createSlice } from "@reduxjs/toolkit";

export const sendItemSlider = createSlice({
  name: "sendItemSlider",
  initialState: 24,
  reducers: {
    sendCurrentItemSlider: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { sendCurrentItemSlider } = sendItemSlider.actions;

export default sendItemSlider.reducer;
