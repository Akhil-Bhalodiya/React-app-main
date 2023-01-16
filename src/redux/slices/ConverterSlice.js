import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fromunit:"Input 1",
    tounit:"Input 2",
    currentstate:"",
    value:"",
    result:"",
}

export const ConverterSlice = createSlice({
    name: "converter",
    initialState,
    reducers: {
        setFromunit:(state, action)=> {
            state.fromunit = action.payload;
        },
        setTounit:(state, action)=> {
            state.tounit = action.payload;
        },
        setCurrentstate:(state, action)=> {
            state.currentstate = action.payload;
        },
        setValue:(state, action)=> {
            state.value = action.payload;
        },
        setResult:(state, action)=> {
            state.result = action.payload;
        },
    },
});

export const { setFromunit, setTounit, setCurrentstate, setValue, setResult } = ConverterSlice.actions;

export default ConverterSlice.reducer;