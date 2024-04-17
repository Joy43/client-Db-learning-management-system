

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice"
export const store =configureStore({
    reducer:{
[apiSlice.reducerPath]:apiSlice.reducer,
    },
    devTools:false,
    midddleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})