import data from "../assets/data.json";

export const groupedPlans = data?.plans.reduce((acc: any, plan: any) => {
  const { name } = plan;
  if (!acc[name]) {
    acc[name] = [];
  }
  acc[name].push(plan);
  return acc;
}, {});

export const proFeatureList = data?.features.filter(
  (feature) => feature.is_pro === "1"
);

export const freeFeatureList = data?.features.filter(
  (feature) => feature.is_pro === "0"
);

export const extractVisitorCount = (title: string): string => {
  const match = title.match(/<strong>(.*?)<\/strong>/);
  return match ? match[1] : '';
};