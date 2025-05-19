import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import data from "../assets/data.json";
import type { Feature, Plan, PlansInfo } from "../types/pricing.types";
import { freeFeatureList, groupedPlans, proFeatureList } from "./utils";

type PricingSliceState = {
  planInfo: { [key: string]: PlansInfo };
  plans: { [key: string]: Plan[] };
  proFeatureList: Feature[];
  freeFeatureList: Feature[];
  pricingPlanStatus: string;
  selectedPricePlan: { name: string; title: string; text: string }[];
};

const initialState: PricingSliceState = {
  planInfo: data?.plansInfo,
  plans: groupedPlans,
  proFeatureList: proFeatureList,
  freeFeatureList: freeFeatureList,
  pricingPlanStatus: "1_year",
  selectedPricePlan: [],
};

const pricingPlanSlice = createSlice({
  name: "pricing-plans",
  initialState,
  reducers: {
    setPricingPlanStatus: (state, action) => {
      state.pricingPlanStatus = action.payload;
    },

    setSelectedPricePlan: (
      state,
      action: PayloadAction<{ name: string; title: string; text: string }>
    ) => {
      const existingIndex = state.selectedPricePlan.findIndex(
        (item) => item.name === action.payload.name
      );

      if (existingIndex !== -1) {
        // Update existing
        state.selectedPricePlan[existingIndex].title = action.payload.title;
        state.selectedPricePlan[existingIndex].text = action.payload.text;
      } else {
        // Add new
        state.selectedPricePlan.push({
          name: action.payload.name,
          title: action.payload.title,
          text: action.payload.text,
        });
      }
    },
  },
});

export const { setPricingPlanStatus, setSelectedPricePlan } =
  pricingPlanSlice.actions;

export const pricingPlanSliceReducer = pricingPlanSlice.reducer;
