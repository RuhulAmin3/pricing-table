import { useMemo } from "react";
import { InfoSvgIcon } from "../../assets/icons/InfoSvgIcon";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setSelectedPricePlan } from "../../store/slice";
import type { Plan, Variant } from "../../types/pricing.types";
import Dropdown from "../Dropdown";
import Tooltip from "../Tooltip";

import { StyledPricingCardHeader, PlanInfo } from "./styled.pricingTable";

export const PricingCardHeader = ({
  plan,
  pricingPlanStatus,
}: {
  plan: Plan[];
  pricingPlanStatus: string;
}) => {
  const dispatch = useAppDispatch();

  const { selectedPricePlan } = useAppSelector((state) => state.pricingPlans);

  const selectedPlan = useMemo(() => {
    return plan?.find((item) => {
      const selectedPlan = selectedPricePlan.some(
        (plan) => plan.name === item.name && plan.title === item.title
      );
      return selectedPlan;
    });
  }, [plan, selectedPricePlan]);

  if (!selectedPlan) return;

  const { name, title, details, text } = selectedPlan;
  const planDetails = details[pricingPlanStatus];
  
  const { price, price_postfix } = planDetails;

  const handleChange = (value: string | number) => {
    const selectedPlan = plan.find((item) => item.title === value);
    if (!selectedPlan) return;

    dispatch(
      setSelectedPricePlan({
        name: selectedPlan?.name,
        title: selectedPlan?.title,
      })
    );
  };
  return (
    <StyledPricingCardHeader $variant={name as Variant}>
      <h4>{name}</h4>
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

      {plan?.length > 1 ? (
        <>
          <Dropdown
            onChange={handleChange}
            value={title}
            options={plan?.map((item) => {
              return {
                label: item.title,
                value: item.title,
              };
            })}
          ></Dropdown>

          <Tooltip isInfo content={text}>
            <InfoSvgIcon />
          </Tooltip>
        </>
      ) : (
        <PlanInfo $variant={name as Variant}>
          <p dangerouslySetInnerHTML={{ __html: title }} />
          <Tooltip isInfo content={text}>
            <InfoSvgIcon />
          </Tooltip>
        </PlanInfo>
      )}
    </StyledPricingCardHeader>
  );
};
