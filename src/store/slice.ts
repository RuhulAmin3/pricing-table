import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json";

type PricingSliceState = {
    
};

const initialState: PricingSliceState = {
    data: data,
};

const pricingPlanSlice = createSlice({
    name: "pricing-plans",
    initialState,
    reducers: {},
});

export const pricingPlanSliceReducer = pricingPlanSlice.reducer;