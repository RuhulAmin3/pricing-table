import styled from "styled-components";
import type { Variant } from "../../types/pricing.types";
import { variants } from "../../constant";

export const StyledPricingTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

export const StyledPricingCard = styled.div<{
  $variant: Variant;
  $isPopular: boolean;
}>`
  border-radius: 8px;
  padding: 20px;
  position: relative;
  border: 1px solid #eaeff2;
  border-top: 8px solid ${({ $variant }) => variants[$variant].primaryColor};
  width: 100%;

  ${({ $isPopular, $variant }: { $isPopular: boolean; $variant: Variant }) =>
    $isPopular &&
    `
    &::before {
      content: 'Most Popular';
      position: absolute;
      top: 5px;
      right: 5px;
      
      background-color: ${variants[$variant].primaryColor};
      color: white;
      font-size: 12px;
      font-weight: 600;
      padding: 6px 8px;
      border-radius: 4px;
    }
  `}
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

export const PlanInfoContainer = styled.div<{ $variant: Variant }>`
  padding: 4px 16px;
  border-radius: 50px;
  background-color: ${({ $variant }) => variants[$variant].secondaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  p {
    margin: 0;
    font-size: 12px;
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
  min-height: 420px;
  h4 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding-block: 10px;
    color: ${({ theme }) => (theme as any).colors.textColor};
  }
`;

export const FeatureListItem = styled.div`
  padding-block: 10px;
  font-size: 14px;
  line-height: 14px;
  color: ${({ theme }) => (theme as any).colors.textColor};
`;

export const DynamicFeature = styled.span`
  display: inline-block;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;


export const PriceWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
  font-size: 14px;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => (theme as any).colors.textColor};
`;

export const OriginalPrice = styled.del`
  color: #ff424d;
`;