import { createSlice } from "@reduxjs/toolkit";

const editPreviousText = createSlice({
  name: "tasks",
  initialState: null,
  reducers: {
    editPreText: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { editPreText } = editPreviousText.actions;
export default editPreviousText.reducer;
