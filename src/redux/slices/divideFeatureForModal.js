import { createSlice } from "@reduxjs/toolkit";

export const divideFeatureForModal = createSlice({
  name: "featureForModal",
  initialState: true,
  reducers: {
    isDivide: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { isDivide } = divideFeatureForModal.actions;

export default divideFeatureForModal.reducer;
