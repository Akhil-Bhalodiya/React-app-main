import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tik: "",
};

export const dropdownSlice = createSlice({
  name: "tik",
  initialState,
  reducers: {
    setTik: (state, action) => {
      state.tik = action.payload;
    },
  },
});

export const { setTik } = dropdownSlice.actions;
export default dropdownSlice.reducer;
