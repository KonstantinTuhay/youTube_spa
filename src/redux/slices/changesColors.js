import { createSlice } from "@reduxjs/toolkit";

const changesColors = createSlice({
  name: "color",
  initialState: "#707070",
  reducers: {
    change: (state, action) => {
      if (action.payload === "#707070") {
        return (state = "#FF0000");
      } else {
        return (state = "#707070");
      }
    },
  },
});

export const { change } = changesColors.actions;
export default changesColors.reducer;
