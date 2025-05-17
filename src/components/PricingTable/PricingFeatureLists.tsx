import { StyledFeatureLists, FeatureListItem } from "./styled.pricingTable";

export const PricingFeatureLists = () => {
  return (
    <StyledFeatureLists>
      <h4>Free Includes:</h4>
      {[
        "Unlimited widgets",
        "Unlimited users",
        "Unlimited storage",
        "Unlimited projects",
        "Unlimited integrations",
        "Unlimited support",
        "Unlimited API access",
        "Unlimited data export",
        "Unlimited data import",
        "Unlimited data storage",
        "Unlimited data processing",
      ].map((item, index) => (
        <FeatureListItem key={index} className="feature-list">
          <span>{item}</span>
        </FeatureListItem>
      ))}
    </StyledFeatureLists>
  );
};
