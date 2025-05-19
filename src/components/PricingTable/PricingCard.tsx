import { PricingFeatureLists } from "./PricingFeatureLists";
import { PricingCardHeader } from "./PricingCardHeader";
import { StyledPricingCard } from "./styled.pricingTable";
import Button from "../Button";
import type { Plan, Variant } from "../../types/pricing.types";
import { useEffect } from "react";
import { setSelectedPricePlan } from "../../store/slice";
import { useAppDispatch } from "../../store/hook";

export const PricingCard = ({
  plan,
  pricingPlanStatus,
}: {
  plan: Plan[];
  pricingPlanStatus: string;
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const selectedPlan = plan.find((item) => item.title === plan[0].title);
    if (!selectedPlan) return;
    dispatch(
      setSelectedPricePlan({
        name: selectedPlan?.name,
        title: selectedPlan?.title,
        text: selectedPlan?.text,
      })
    );
  }, []);

  return (
    <StyledPricingCard $variant={plan[0].name as Variant}>
      <PricingCardHeader plan={plan} pricingPlanStatus={pricingPlanStatus} />
      <PricingFeatureLists
        planName={plan[0].name}
        isFree={plan[0].name == "Free"}
      />
      <Button variant={plan[0].name as Variant}>
        {plan[0].details[pricingPlanStatus].btn_text}
      </Button>
    </StyledPricingCard>
  );
};
