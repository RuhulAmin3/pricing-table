// Internal imports
import { RootContainer } from "../styles/styled.global";
import { PricingTab, PricingTable } from "../components";

const PricingPlans = () => {
    return (
        <RootContainer>
            <PricingTab />
            <PricingTable />
        </RootContainer>
    );
}

export default PricingPlans;