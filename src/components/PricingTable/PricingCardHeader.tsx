import { InfoSvgIcon } from "../../assets/icons/InfoSvgIcon";
import type { Plan, Variant } from "../../types/pricing.types";
import { StyledPricingCardHeader, PlanInfo } from "./styled.pricingTable";

export const PricingCardHeader = ({
  plan,
  pricingPlanStatus,
}: {
  plan: Plan;
  pricingPlanStatus: string;
}) => {
  const { details } = plan;
  const planDetails = details[pricingPlanStatus];
  const { price, price_postfix } = planDetails;

  return (
    <StyledPricingCardHeader $variant={plan.name as Variant}>
      <h4>{plan.name}</h4>
      <div>
        <h2>{price}</h2>
        <p>{price_postfix}</p>
        {pricingPlanStatus === "2_year" &&
          details["1_year"].price !== "Free" && (
            <del>
              {details["1_year"].price} {details["1_year"].price_postfix}{" "}
            </del>
          )}
      </div>
      <PlanInfo $variant={plan.name as Variant}>
        <p dangerouslySetInnerHTML={{ __html: plan.title }} />
        <InfoSvgIcon />
      </PlanInfo>
    </StyledPricingCardHeader>
  );
};
