import styled from "styled-components";
import { variants } from "./constant";

interface StyledButtonProps {
  $variant?: "free" | "basic" | "pro" | "growth";
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  padding: 10px 15px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  border-radius: 8px;
  background-color: ${({ $variant = "free" }) =>
    variants[$variant].backgroundColor};
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: white;
  margin-top: 40px;

  &:hover {
    background-color: ${({ $variant = "free" }) =>
      variants[$variant].hoverColor};
  }

  &:focus {
    outline: none;
  }
`;
