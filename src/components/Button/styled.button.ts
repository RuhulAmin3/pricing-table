import styled from "styled-components";
import { variants } from "./constant";
import { Variant } from "../../types/pricing.types";

export const StyledButton = styled.button<{ $variant: Variant }>`
  width: 100%;
  padding: 10px 15px;
  border: none;
  font-size: 16px;
  line-height: 24px;
  border-radius: 8px;
  background-color: ${({ $variant = Variant["FREE"] }) =>
    variants[$variant].backgroundColor};
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: white;
  margin-top: 40px;

  &:hover {
    background-color: ${({ $variant = Variant["FREE"] }) =>
      variants[$variant].hoverColor};
  }

  &:focus {
    outline: none;
  }
`;
