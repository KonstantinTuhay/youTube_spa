import { createSlice } from "@reduxjs/toolkit";

const removeSlices = createSlice({
  name: "color",
  initialState: null,
  reducers: {
    remove: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { remove } = removeSlices.actions;
export default removeSlices.reducer;
