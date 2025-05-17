export interface PlanDetail {
  price: string
  price_postfix: string
  plan_type: string
  plan_info: string
  dd_text: string
  btn_text: string
  price_id: string
}

export interface Plan {
  name: string
  price: string
  title: string
  text: string
  details: {
    [key: string]: PlanDetail
  }
}

export interface PlansInfo {
  title: string
  sub_title: string
  discount: string
}

export interface Feature {
  is_pro: string
  feature_title: string
  feature_desc: string
}

export interface PricingData {
  plans: Plan[]
  plansInfo: {
    [key: string]: PlansInfo
  }
  features: Feature[]
}

export type BillingPeriod = "1_year" | "2_year"

export interface PlanGroup {
  name: string
  plans: Plan[]
}

// export interface Variant {
//   $variant: "Free" | "Basic" | "Pro" | "Growth";
// }

export enum Variant {
  FREE = "Free",
  BASIC = "Basic",
  PRO = "Pro",
  GROWTH = "Growth",
}
