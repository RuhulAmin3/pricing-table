import { DiscountLabel, Divider, TabButton, TabWrapper } from "./styled.pricingTab";

export const PricingTab: React.FC = () => {
    return (
        <TabWrapper>
            <TabButton
                $isActive={true}
            // onClick={() => dispatch(setBillingPeriod('1_year'))}
            >
                Billed Monthly
            </TabButton>
            <Divider />
            <TabButton
                $isActive={false}
            // onClick={() => dispatch(setBillingPeriod('2_year'))}
            >
                Billed Yearly
            </TabButton>
            <DiscountLabel>Save 20% 😍</DiscountLabel>
        </TabWrapper>
    );
};