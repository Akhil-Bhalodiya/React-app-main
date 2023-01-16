import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle : "",
}

export const ToggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        setToggle:(state, action)=> {
            state.toggle = action.payload;
        },
    },
})

export const {setToggle} = ToggleSlice.actions;

export default ToggleSlice.reducer;