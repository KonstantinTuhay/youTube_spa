import { createSlice } from "@reduxjs/toolkit";

const switchCards = createSlice({
  name: "switch",
  initialState: true,
  reducers: {
    switchCard: (state, action) => {
      console.log(action.payload);
      return (state = action.payload);
    },
  },
});

export const { switchCard } = switchCards.actions;
export default switchCards.reducer;
