import { createSlice } from "@reduxjs/toolkit";

type PricingSliceState = {
};

const initialState: PricingSliceState = {

};

const pricingPlanSlice = createSlice({
    name: "pricing-plans",
    initialState,
    reducers: {},
});

export const pricingPlanSliceReducer = pricingPlanSlice.reducer;