import { PricingFeatureLists } from "./PricingFeatureLists";
import { PricingCardHeader } from "./PricingCardHeader";
import { StyledPricingCard } from "./styled.pricingTable";

export const PricingCard = () => {
  return (
    <StyledPricingCard>
      <PricingCardHeader />
      <PricingFeatureLists />
    </StyledPricingCard>
  );
};
