import { createSlice } from "@reduxjs/toolkit";

// Images Import

import National from "../../images/national foods.png";

const initialState = {
    brands: [
      { name: "ghNational Foods", categery: "Grocery & Foods", img_src: National, },
    ]
};

export const brandsSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {},
});

export default brandsSlice.reducer; 
