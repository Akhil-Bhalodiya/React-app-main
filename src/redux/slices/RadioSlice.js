import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  radio: "",
};

export const RadioSlice = createSlice({
  name: "radio",
  initialState,
  reducers: {
    setRadio: (state, action) => {
      state.radio = action.payload;
    },
  },
});

export const { setRadio } = RadioSlice.actions;
export default RadioSlice.reducer;
