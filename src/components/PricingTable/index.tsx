import { useAppSelector } from "../../store/hook";
import { PricingCard } from "./PricingCard";
import { StyledPricingTable } from "./styled.pricingTable";

export const PricingTable = () => {
  const { plans, pricingPlanStatus } = useAppSelector((state) => state.pricingPlans);
  return (
    <StyledPricingTable>
      {Object.keys(plans).map((planKey) => {
        const plan = plans[planKey];
        return <PricingCard key={planKey} plan={plan} pricingPlanStatus={pricingPlanStatus} />;
      })}
    </StyledPricingTable>
  );
};