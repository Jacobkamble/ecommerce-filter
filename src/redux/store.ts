import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import filterSlice from "./features/filterSlice";

const store=configureStore({
    reducer:{
        products:productSlice,
        filter:filterSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
})

export default store;