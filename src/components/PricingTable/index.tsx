import { PricingCard } from "./PricingCard"
import { StyledPricingTable } from "./styled.pricingTable"

export const PricingTable = () => {
    return (
        <StyledPricingTable>
            {
                Array.from({ length: 4 }, (_, index) => (
                    <PricingCard key={index} />
                ))
            }
        </StyledPricingTable>
    )
}