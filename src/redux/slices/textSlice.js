import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    enterText: (state, action) => {
      console.log(state);
      return (state = action.payload);
    },
  },
});

export const { enterText } = textSlice.actions;

export default textSlice.reducer;
