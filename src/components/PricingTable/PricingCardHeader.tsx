import { InfoSvgIcon } from "../../assets/icons/InfoSvgIcon";
import { StyledPricingCardHeader, PlanInfo } from "./styled.pricingTable";

export const PricingCardHeader = () => {
    return (
        <StyledPricingCardHeader>
            <h4>Free</h4>
            <h2>Free</h2>
            <PlanInfo>
                <p>
                    Up to <span>500</span> visitors/month
                </p>
                <InfoSvgIcon />
            </PlanInfo>
        </StyledPricingCardHeader>
    );
}