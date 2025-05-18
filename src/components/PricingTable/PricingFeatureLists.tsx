import { useAppSelector } from "../../store/hook";
import Tooltip from "../Tooltip";
import { StyledFeatureLists, FeatureListItem } from "./styled.pricingTable";

export const PricingFeatureLists = ({ isFree }: { isFree: boolean }) => {
  const {proFeatureList, freeFeatureList} = useAppSelector((state) => state.pricingPlans);
  return (
    <StyledFeatureLists>
      <h4>{isFree ? "Free Includes:" : "Everything in free plus:"}</h4>
      {(isFree ? freeFeatureList : proFeatureList).map((item, index) => (
        <FeatureListItem key={index}>
          <Tooltip content={item.feature_desc}>
          <span>{item.feature_title}</span>
          </Tooltip>
        </FeatureListItem>
      ))}
    </StyledFeatureLists>
  );
};
