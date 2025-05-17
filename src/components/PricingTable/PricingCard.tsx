import { PricingFeatureLists } from "./PricingFeatureLists";
import { PricingCardHeader } from "./PricingCardHeader";
import { StyledPricingCard } from "./styled.pricingTable";
import Button from "../Button";
import type { Plan, Variant } from "../../types/pricing.types";

export const PricingCard = ({
  plan,
  pricingPlanStatus,
}: {
  plan: Plan[];
  pricingPlanStatus: string;
}) => {
  
  return (
    <StyledPricingCard $variant={plan[0].name as Variant}>
      <PricingCardHeader plan={plan[0]} pricingPlanStatus={pricingPlanStatus} />
      <PricingFeatureLists isFree={plan[0].name == "Free"} />
      <Button variant={plan[0].name as Variant}>
        {plan[0].details[pricingPlanStatus].btn_text}
      </Button>
    </StyledPricingCard>
  );
};
