import { createSlice } from "@reduxjs/toolkit";

const switchDayNight = createSlice({
  name: "switchDayNight",
  initialState: true,
  reducers: {
    switchTheme: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { switchTheme } = switchDayNight.actions;
export default switchDayNight.reducer;
