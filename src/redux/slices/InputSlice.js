import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  val: "",
};

export const InputSlice = createSlice({
  name: "inputslice",
  initialState,
  reducers: {
    setVal: (state, action) => {
      state.val = action.payload;
    },
  },
});

export const { setVal } = InputSlice.actions;

export default InputSlice.reducer;
