import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    update : 0,
}

export const IncrementSlice = createSlice({
    name: "increment",
    initialState,
    reducers: {
        setUpdate:(state, action)=> {
            state.update = action.payload
        }
    }
})

export const {setUpdate} = IncrementSlice.actions;
export default IncrementSlice.reducer;