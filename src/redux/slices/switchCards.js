import { createSlice } from "@reduxjs/toolkit";

const switchCards = createSlice({
  name: "switchCard",
  initialState: true,
  reducers: {
    switchCard: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { switchCard } = switchCards.actions;
export default switchCards.reducer;
