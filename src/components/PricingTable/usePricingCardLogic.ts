// External imports
import { useMemo, useCallback } from "react";

// Internal imports
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setSelectedPricePlan } from "../../store/slice";
import type { Plan } from "../../types/pricing.types";

/**
 * Custom hook to encapsulate pricing card logic such as:
 * - Getting current selected plan
 * - Computing plan options for dropdown
 * - Handling plan change
 * - Determining whether to show original pricing
 */
export const usePricingCardLogic = (
  plan: Plan[], // The list of plans for a given visitor tier
  pricingPlanStatus: string // e.g., "1_year", "2_year"
) => {
  const dispatch = useAppDispatch();

  // Get the currently selected plans from Redux store
  const { selectedPricePlan } = useAppSelector((state) => state.pricingPlans);

  /**
   * Find the plan from the current tier that is selected.
   * This helps in displaying the current selection correctly.
   */
  const selectedPlan = useMemo(
    () =>
      plan.find((item) =>
        selectedPricePlan.some(
          (sel) => sel.name === item.name && sel.title === item.title
        )
      ),
    [plan, selectedPricePlan]
  );

  /**
   * Check whether the original 1-year price should be shown.
   * This happens only when a 2-year plan is selected and
   * the 1-year plan is not free.
   */
  const showOriginalPrice =
    pricingPlanStatus === "2_year" &&
    selectedPlan?.details["1_year"].price !== "Free";

  /**
   * Transform the plan list into options format for the dropdown.
   * Each option contains a `label` and `value`.
   */
  const planOptions = useMemo(
    () =>
      plan.map((item) => ({
        label: item.title,
        value: item.title,
      })),
    [plan]
  );

  /**
   * Handle dropdown selection change.
   * It finds the selected plan by title and dispatches it to the Redux store.
   */
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
