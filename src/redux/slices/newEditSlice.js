import { createSlice } from "@reduxjs/toolkit";

const newEditSlice = createSlice({
  name: "newEdit",
  initialState: "",
  reducers: {
    newEdit: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { newEdit } = newEditSlice.actions;
export default newEditSlice.reducer;
