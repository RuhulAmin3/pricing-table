import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import data from "../assets/data.json";
import type { Feature, Plan, PlansInfo } from "../types/pricing.types";
import { freeFeatureList, groupedPlans, proFeatureList } from "./utils";

// Define the shape of the pricing slice state
type PricingSliceState = {
  planInfo: { [key: string]: PlansInfo };
  plans: { [key: string]: Plan[] };
  proFeatureList: Feature[];
  freeFeatureList: Feature[];
  pricingPlanStatus: string;
  selectedPricePlan: { name: string; title: string; text: string }[];
};

// Initial state populated with static data
const initialState: PricingSliceState = {
  planInfo: data?.plansInfo,
  plans: groupedPlans,
  proFeatureList, 
  freeFeatureList,
  pricingPlanStatus: "1_year",
  selectedPricePlan: [],
};

const pricingPlanSlice = createSlice({
  name: "pricing-plans",
  initialState,
  reducers: {
    // Update the active pricing duration (e.g., 1_year, 2_year)
    setPricingPlanStatus: (state, action) => {
      state.pricingPlanStatus = action.payload;
    },

    // Add or update a selected pricing plan
    setSelectedPricePlan: (
      state,
      action: PayloadAction<{ name: string; title: string; text: string }>
    ) => {
      const existingIndex = state.selectedPricePlan.findIndex(
        (item) => item.name === action.payload.name
      );

      if (existingIndex !== -1) {
        state.selectedPricePlan[existingIndex].title = action.payload.title;
        state.selectedPricePlan[existingIndex].text = action.payload.text;
      } else {
        state.selectedPricePlan.push(action.payload); 
      }
    },
  },
});

// Export actions 
export const { setPricingPlanStatus, setSelectedPricePlan } =
  pricingPlanSlice.actions; 

// Export reducer
export const pricingPlanSliceReducer = pricingPlanSlice.reducer;
