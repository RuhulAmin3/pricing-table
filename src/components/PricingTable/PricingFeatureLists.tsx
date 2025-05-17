import { useAppSelector } from "../../store/hook";
import { StyledFeatureLists, FeatureListItem } from "./styled.pricingTable";

export const PricingFeatureLists = ({ isFree }: { isFree: boolean }) => {
  const {proFeatureList, freeFeatureList} = useAppSelector((state) => state.pricingPlans);
  return (
    <StyledFeatureLists>
      <h4>{isFree ? "Free Includes:" : "Everything in free plus:"}</h4>
      {(isFree ? freeFeatureList : proFeatureList).map((item, index) => (
        <FeatureListItem key={index} className="feature-list">
          <span>{item.feature_title}</span>
        </FeatureListItem>
      ))}
    </StyledFeatureLists>
  );
};
