import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    price: "",
    quantity : ""
}

export const BillingSlice = createSlice({
    name: "billing",
    initialState,
    reducers: {
        setPrice:(state, action)=> {
            state.price = action.payload;
        },
        setQuantity:(state, action)=> {
            state.quantity = action.payload;
        },
    },
})

export const {setPrice, setQuantity} = BillingSlice.actions;
export default BillingSlice.reducer;