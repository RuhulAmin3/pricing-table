// External Imports
import { useEffect } from "react";

// Internal Imports
import type { Plan, Variant } from "../../types/pricing.types";
import { StyledPricingCard } from "./styled.pricingTable";
import { setSelectedPricePlan } from "../../store/slice";
import PricingFeatureLists from "./PricingFeatureLists";
import PricingCardHeader from "./PricingCardHeader";
import { useAppDispatch } from "../../store/hook";
import Button from "../Button";

export const PricingCard = ({
  plan,
  pricingPlanStatus,
}: {
  plan: Plan[];
  pricingPlanStatus: string;
}) => {
  const dispatch = useAppDispatch();

  // Effect to set selected price plan on initial render
  useEffect(() => {
    const selectedPlan = plan.find((item) => item.title === plan[0].title);
    if (selectedPlan) {
      dispatch(
        setSelectedPricePlan({
          name: selectedPlan?.name,
          title: selectedPlan?.title,
          text: selectedPlan?.text,
        })
      );
    }
  }, [dispatch, plan]);

  return (
    <StyledPricingCard
      $isPopular={plan[0].name === "Pro"}
      $variant={plan[0].name as Variant}
    >
      {/* Pricing card header */}
      <PricingCardHeader plan={plan} pricingPlanStatus={pricingPlanStatus} />

      {/* Pricing feature lists */}
      <PricingFeatureLists
        planName={plan[0].name}
        isFree={plan[0].name === "Free"}
      />

      {/* Button with variant based on plan */}
      <Button variant={plan[0].name as Variant}>
        {plan[0].details[pricingPlanStatus].btn_text}
      </Button>
    </StyledPricingCard>
  );
};
