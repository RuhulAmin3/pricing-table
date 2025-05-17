import { DiscountLabel, Divider, TabButton, TabWrapper } from "./styled.pricingTab";

export const PricingTab: React.FC = () => {
    return (
        <TabWrapper>
            <TabButton
                $isActive={true}
            >
                Billed Monthly
            </TabButton>
            <Divider />
            <TabButton
                $isActive={false}
            >
                Billed Yearly
            </TabButton>
            <DiscountLabel>Save 20% 😍</DiscountLabel>
        </TabWrapper>
    );
};