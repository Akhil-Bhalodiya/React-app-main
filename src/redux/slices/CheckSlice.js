import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IOS: false,
  WEB: false,
  Android: false,
};

export const CheckSlice = createSlice({
  name: "Checkbox",
  initialState,
  reducers: {
    setCheck: (state, action) => {
      state[action?.payload?.target?.id] = action?.payload?.target?.checked;
    },
  },
});

export const { setCheck } = CheckSlice.actions;
export default CheckSlice.reducer;
