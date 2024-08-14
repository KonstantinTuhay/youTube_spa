import { createSlice } from "@reduxjs/toolkit";

const changesColors = createSlice({
  name: "color",
  initialState: "",
  reducers: {
    change: (state, action) => {
      if (action.payload === "black") {
        return (state = "red");
      } else {
        return (state = "black");
      }
    },
  },
});

export const { change } = changesColors.actions;
export default changesColors.reducer;
