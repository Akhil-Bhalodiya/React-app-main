import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    first: ""
}

export const TypingSlice = createSlice({
    name:"typing",
    initialState,
    reducers:{
        setFirst:(state, action)=> {
            state.first = action.payload
        }
    }
})

export const {setFirst} = TypingSlice.actions;
export default TypingSlice.reducer;