import { configureStore } from "@reduxjs/toolkit";
import brandsReducer from "../features/brands/brandSlice"; 

export const store = configureStore({
    reducer: {
        companiesdata: brandsReducer, 
    },
});
