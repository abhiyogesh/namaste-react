import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

//configuration for our store

//Store has it itself reducer functions which container slice reducer inside it. It can contains multiple reducer for different slices
const appStore  = configureStore({
    reducer : {
     cart  : cartReducer
    }
});


export default appStore;