import styled from "styled-components";
import type { Variant } from "../../types/pricing.types";
import { variants } from "../../constant";

export const StyledPricingTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 20px;
`;

export const StyledPricingCard = styled.div<{ $variant: Variant }>`
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #eaeff2;
  border-top: 8px solid ${({ $variant }) => variants[$variant].primaryColor};
  width: 100%;
`;

export const StyledPricingCardHeader = styled.div<{ $variant: Variant }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  h4 {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ theme }) => (theme as any).colors.textColor};
  }

  h2 {
    font-size: 32px;
    line-height: 24px;
    font-weight: 600;
    color: ${({ $variant }) => variants[$variant].primaryColor};
  }
`;

export const PlanInfo = styled.div<{ $variant: Variant }>`
  padding: 4px 16px;
  border-radius: 50px;
  background-color: ${({ $variant }) => variants[$variant].secondaryColor};
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  p {
    margin: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: ${({ $variant }) => variants[$variant].primaryColor};
    white-space: nowrap;
    span {
      font-weight: 700;
    }
  }
`;

export const StyledFeatureLists = styled.div`
  margin-top: 16px;

  h4 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding-block: 10px;
    color: ${({ theme }) => (theme as any).colors.textColor};
  }
`;

export const FeatureListItem = styled.div`
  padding-block: 8px;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => (theme as any).colors.textColor};
`;

export const DynamicFeature = styled.span`
  display: inline-block;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const DropdownBox = styled.div`
  display: flex;
  align-items: center;
`;
