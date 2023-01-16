import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: "",
    loggedin:""
}

export const LoginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        setData:(state, action)=>{
            state.data = action.payload;
        },
        setLoggedin:(state, action)=>{
            state.loggedin = action.payload
        }
    }
})

export const {setLoggedin, setData} = LoginSlice.actions;
export default LoginSlice.reducer