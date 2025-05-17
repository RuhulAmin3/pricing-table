import styled from "styled-components";

export const StyledPricingTable = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
`

export const StyledPricingCard = styled.div`
    border-radius: 8px;
    padding: 20px;
    border: 1px solid #eaeff2;
    border-top: 8px solid red;
    width: 100%;
`
export const StyledPricingCardHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    
    h4{
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.textColor};
    }

    h2{
        font-size: 32px;
        line-height: 24px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.warningColor};
    }
`

export const PlanInfo = styled.div`
    padding: 4px 16px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.infoBgColor};
    margin-top: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;

    p{
        margin: 0;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.infoColor};
        white-space: nowrap;
         span{
        font-weight: 700;
    }
    }
   
    `

export const StyledFeatureLists = styled.div`

    margin-top: 16px;

    h4{
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        padding-block: 10px;
        color: ${({ theme }) => theme.colors.textColor};
    }
`

export const FeatureListItem = styled.div`
    padding-block: 8px;
    font-size: 14px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.textColor};
`
