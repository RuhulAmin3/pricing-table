// Internal Imports
import { Variant } from "../../types/pricing.types";
import { StyledButton } from "./styled.button";

interface ButtonProps {
  variant?: Variant;
  onClick?: () => void;
  children: React.ReactNode;
}

// Define a Button component that accepts an onClick handler and children
const Button: React.FC<ButtonProps> = ({
  children,
  variant = Variant["FREE"],
  onClick,
}) => {
  return (
    <StyledButton $variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
