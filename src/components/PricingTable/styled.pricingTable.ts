import styled from "styled-components";

export const StyledPricingTable = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`

export const StyledPricingCard = styled.div`
    border-radius: 8px;
    padding: 20px;
    border: 1px solid #eaeff2;
    border-top: 8px solid red;
    width: 100%;
    text-align: center;
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