import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../slices/InputSlice";
import checkReducer from "../slices/CheckSlice";
import radioReducer from "../slices/RadioSlice";
import dropdownReducer from "../slices/DropDownSlice";
import typingReducer from '../slices/TypingSlice';
import toggleReducer from '../slices/ToggleSlice';
import incrementReducer from '../slices/IncrementSlice';
import billingReducer from '../slices/BillingSlice';
import converterReducer from '../slices/ConverterSlice';
import movieReducer from '../slices/MovieSlice'
import loginReducer from '../slices/LoginSlice'

export const store = configureStore({
  reducer: {
    inputfield: inputReducer,
    checkBox: checkReducer,
    radiobtn: radioReducer,
    DropDown: dropdownReducer,
    typing: typingReducer,
    toggle: toggleReducer,
    increment: incrementReducer,
    billing: billingReducer,
    converter: converterReducer,
    moviedb: movieReducer,
    login: loginReducer,
  },
});
