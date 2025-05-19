// Internal imports
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setPricingPlanStatus } from "../../store/slice";
import {
  DiscountLabel,
  Divider,
  TabButton,
  TabWrapper,
} from "./styled.pricingTab";

const PricingTab = () => {
  const { planInfo, pricingPlanStatus } = useAppSelector(
    (state) => state.pricingPlans
  );

  const dispatch = useAppDispatch();
  
  return (
    <TabWrapper>
      <TabButton
        onClick={() => dispatch(setPricingPlanStatus("1_year"))}
        $isActive={pricingPlanStatus === "1_year"}
      >
        {planInfo["1_year"]?.title}
      </TabButton>
      <Divider />
      <TabButton
        onClick={() => dispatch(setPricingPlanStatus("2_year"))}
        $isActive={pricingPlanStatus === "2_year"}
      >
        {planInfo["2_year"]?.title}
      </TabButton>
      <DiscountLabel>{planInfo["2_year"]?.discount}</DiscountLabel>
    </TabWrapper>
  );
};

export default PricingTab;