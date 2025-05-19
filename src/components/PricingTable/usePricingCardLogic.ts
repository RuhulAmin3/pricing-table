import { useMemo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setSelectedPricePlan } from "../../store/slice";
import type { Plan } from "../../types/pricing.types";

export const usePricingCardLogic = (
  plan: Plan[],
  pricingPlanStatus: string
) => {
  const dispatch = useAppDispatch();
  const { selectedPricePlan } = useAppSelector((state) => state.pricingPlans);

  const selectedPlan = useMemo(
    () =>
      plan.find((item) =>
        selectedPricePlan.some(
          (sel) => sel.name === item.name && sel.title === item.title
        )
      ),
    [plan, selectedPricePlan] 
  );

  const showOriginalPrice =
    pricingPlanStatus === "2_year" &&
    selectedPlan?.details["1_year"].price !== "Free";

  const planOptions = useMemo(
    () =>
      plan.map((item) => ({
        label: item.title,
        value: item.title,
      })),
    [plan]
  );

  const onPlanChange = useCallback(
    (value: string | number) => {
      const targetPlan = plan.find((item) => item.title === value);
      if (!targetPlan) return;

      dispatch(
        setSelectedPricePlan({
          name: targetPlan.name,
          title: targetPlan.title,
          text: targetPlan.text,
        })
      );
    },
    [dispatch, plan]
  );

  return {
    selectedPlan,
    planOptions,
    onPlanChange,
    showOriginalPrice,
  };
};
