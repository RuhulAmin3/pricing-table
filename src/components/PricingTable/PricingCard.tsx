import { PricingFeatureLists } from "./PricingFeatureLists";
import { PricingCardHeader } from "./PricingCardHeader";
import { StyledPricingCard } from "./styled.pricingTable";
import Button from "../Button";

export const PricingCard = () => {
  return (
    <StyledPricingCard>
      <PricingCardHeader />
      <PricingFeatureLists />
      <Button>Select Plan</Button>
    </StyledPricingCard>
  );
};
