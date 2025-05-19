// Internal Imports
import { StyledPricingTable } from "./styled.pricingTable";
import { useAppSelector } from "../../store/hook";
import { PricingCard } from "./PricingCard";

const PricingTable = () => {
  const { plans, pricingPlanStatus } = useAppSelector((state) => state.pricingPlans);
  return (
    <StyledPricingTable>
      {Object.keys(plans).map((planName) => {
        const plan = plans[planName];
        return <PricingCard key={planName} plan={plan} pricingPlanStatus={pricingPlanStatus} />;
      })}
    </StyledPricingTable>
  );
};

export default PricingTable;