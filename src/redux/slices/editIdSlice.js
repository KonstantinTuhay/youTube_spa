import { createSlice } from "@reduxjs/toolkit";

const editIdSlice = createSlice({
  name: "tasks",
  initialState: null,
  reducers: {
    editId: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { editId } = editIdSlice.actions;
export default editIdSlice.reducer;
