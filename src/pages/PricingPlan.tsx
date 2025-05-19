// Internal imports
import { RootContainer } from "../styles/styled.global";
import PricingTable from "../components/PricingTable";
import PricingTab from "../components/PricingTab";

const PricingPlans = () => {
  return (
    <RootContainer>
      <PricingTab />
      <PricingTable />
    </RootContainer>
  );
};

export default PricingPlans;
