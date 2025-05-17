import { StyledButton } from "./styled.button";

interface ButtonProps {
  variant?: "free" | "basic" | "pro" | "growth";
  onClick?: () => void;
  children: React.ReactNode;
}

// Define a Button component that accepts an onClick handler and children
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "free",
  onClick,
}) => {
  return (
    <StyledButton $variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
