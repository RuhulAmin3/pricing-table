import { configureStore } from "@reduxjs/toolkit";
import { pricingPlanSliceReducer } from "./slice";

export const store = configureStore({
    reducer: {
        pricingPlans: pricingPlanSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;