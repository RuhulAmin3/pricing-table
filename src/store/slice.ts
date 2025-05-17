import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data.json";
import type { Feature, Plan, PlansInfo } from "../types/pricing.types";

type PricingSliceState = {
  planInfo: { [key: string]: PlansInfo };
  plans: { [key: string]: Plan[] };
  proFeatureList: Feature[];
  freeFeatureList: Feature[];
  pricingPlanStatus: string;
};

const groupedPlans = data?.plans.reduce((acc: any, plan: any) => {
  const { name } = plan;
  if (!acc[name]) {
    acc[name] = [];
  }
  acc[name].push(plan);
  return acc;
}, {});

const proFeatureList = data?.features.filter(
  (feature) => feature.is_pro === "1"
);

const freeFeatureList = data?.features.filter(
  (feature) => feature.is_pro === "0"
);

const initialState: PricingSliceState = {
  planInfo: data?.plansInfo,
  plans: groupedPlans,
  proFeatureList: proFeatureList,
  freeFeatureList: freeFeatureList,
    pricingPlanStatus: "1_year",
};


const pricingPlanSlice = createSlice({
  name: "pricing-plans",
  initialState,
  reducers: {
    setPricingPlanStatus: (state, action) => {
      state.pricingPlanStatus = action.payload;
    },
  },
});

export const { setPricingPlanStatus } = pricingPlanSlice.actions;

export const pricingPlanSliceReducer = pricingPlanSlice.reducer;
