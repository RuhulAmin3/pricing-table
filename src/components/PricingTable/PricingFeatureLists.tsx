// Internal Imports
import { extractVisitorCount } from "../../store/utils";
import { useAppSelector } from "../../store/hook";
import {
  StyledFeatureLists,
  FeatureListItem,
  DynamicFeature,
} from "./styled.pricingTable";
import Tooltip from "../Tooltip";

type Props = {
  isFree: boolean;
  planName: string;
};

const PricingFeatureLists = ({ isFree, planName }: Props) => {

  const { proFeatureList, freeFeatureList, selectedPricePlan } = useAppSelector(
    (state) => state.pricingPlans
  );
  
  const selectedPlan = selectedPricePlan.find((item) => item.name === planName);
  if (!selectedPlan) return null;
  const featureList = isFree ? freeFeatureList : proFeatureList;

  return (
    <StyledFeatureLists>
      <h4>{isFree ? "Free Includes:" : "Everything in free plus:"}</h4>
      {/* Show dynamic visitor count info for pro plans */}
      {!isFree && (
        <Tooltip content={selectedPlan.text}>
          <DynamicFeature>
            {`Up to ${extractVisitorCount(selectedPlan.title)} visitors/month`}
          </DynamicFeature>
        </Tooltip>
      )}

      {/* Render each feature item with tooltip */}
      {featureList.map((item, index) => (
        <FeatureListItem key={index}>
          <Tooltip content={item.feature_desc}>
            <span>{item.feature_title}</span>
          </Tooltip>
        </FeatureListItem>
      ))}
    </StyledFeatureLists>
  );
};
export default PricingFeatureLists;
