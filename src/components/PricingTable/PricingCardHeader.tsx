// External Imports
import { memo } from "react";

// Internal Imports
import type { Plan, Variant } from "../../types/pricing.types";
import { InfoSvgIcon } from "../../assets/icons/InfoSvgIcon";
import { usePricingCardLogic } from "./usePricingCardLogic";
import { variants } from "../../constant";
import Dropdown from "../Dropdown";
import Tooltip from "../Tooltip";
import {
  DropdownContainer,
  OriginalPrice,
  PlanInfoContainer,
  PriceWrapper,
  StyledPricingCardHeader,
} from "./styled.pricingTable";

type Props = {
  plan: Plan[];
  pricingPlanStatus: string;
};

const PricingCardHeader = ({ plan, pricingPlanStatus }: Props) => {
  const { selectedPlan, planOptions, onPlanChange, showOriginalPrice } =
    usePricingCardLogic(plan, pricingPlanStatus);

  if (!selectedPlan) return null;
  
  const { name, title, details, text } = selectedPlan;
  const { price, price_postfix } = details[pricingPlanStatus];

  return (
    <StyledPricingCardHeader $variant={name as Variant}>
      <h4>{name}</h4>
      <PriceWrapper>
        <h2>{price}</h2>
        <div>
          {/* Show original price if applicable (for annual plan) */}
          {showOriginalPrice && (
            <OriginalPrice>
              {details["1_year"].price} {details["1_year"].price_postfix}
            </OriginalPrice>
          )}
          <p>{price_postfix}</p>
        </div>
      </PriceWrapper>

      {/* If multiple variants of the plan exist, show a dropdown */}
      {plan.length > 1 ? (
        <DropdownContainer>
          <Dropdown
            variant={name as Variant}
            onChange={onPlanChange}
            value={title}
            options={planOptions}
          />

          {/* Tooltip for additional information */}
          <Tooltip isInfo content={text}>
            <InfoSvgIcon color={variants[name as Variant].primaryColor} />
          </Tooltip>
        </DropdownContainer>
      ) : (
        
        // If only one plan, show title and tooltip
        <PlanInfoContainer $variant={name as Variant}>
          <p dangerouslySetInnerHTML={{ __html: title }} />
          <Tooltip isInfo content={text}>
            <InfoSvgIcon color={variants[name as Variant].primaryColor} />
          </Tooltip>
        </PlanInfoContainer>
      )}
    </StyledPricingCardHeader>
  );
};

export default memo(PricingCardHeader);
