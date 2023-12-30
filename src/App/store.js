import { configureStore } from "@reduxjs/toolkit";
import { brandsSlice } from "../features/brands/brandSlice";

export  const store = configureStore({
    reducer: brandsSlice,
});

