import { useAppSelector } from "../../store/hook";
import { extractVisitorCount } from "../../store/utils";
import Tooltip from "../Tooltip";
import {
  StyledFeatureLists,
  FeatureListItem,
  DynamicFeature,
} from "./styled.pricingTable";

export const PricingFeatureLists = ({
  isFree,
  planName,
}: {
  isFree: boolean;
  planName: string;
}) => {
  const { proFeatureList, freeFeatureList, selectedPricePlan } = useAppSelector(
    (state) => state.pricingPlans
  );

  const selectedPlan = selectedPricePlan.find((item) => item.name === planName);
  if (!selectedPlan) return null;
  return (
    <StyledFeatureLists>
      <h4>{isFree ? "Free Includes:" : "Everything in free plus:"}</h4>
      {!isFree && (
        <Tooltip content={selectedPlan?.text}>
          <DynamicFeature>
            {`Up to ${extractVisitorCount(selectedPlan.title)} visitors/month`}
          </DynamicFeature>
        </Tooltip>
      )}
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
