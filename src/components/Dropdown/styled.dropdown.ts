import styled from "styled-components";
import type { Variant } from "../../types/pricing.types";
import { variants } from "../../constant";

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownButton = styled.button<{ $variant: Variant }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 200px;
  padding: 8px 12px;
  background-color: #f8f9fa;
  border: 1px solid ${({ $variant }) => variants[$variant].primaryColor};
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ $variant }) => variants[$variant].primaryColor};
    box-shadow: 0 0 0 2px rgba(159, 122, 234, 0.2);
  }

  & > span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${({ $variant }) => variants[$variant].primaryColor};
  }
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  overflow-y: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 10;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;

export const DropdownItem = styled.div<{
  $isSelected: boolean;
  $variant: Variant;
}>`
  padding: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  border-bottom: 1px solid #e2e8f0;
  not-last-child {
    border-bottom: none;
  }

  background-color: ${({ $isSelected }) =>
    $isSelected ? "#f7fafc" : "transparent"};
  color: ${({
    $isSelected,
    $variant,
    theme,
  }: {
    $isSelected: boolean;
    $variant: Variant;
    theme: any;
  }) =>
    $isSelected ? variants[$variant].primaryColor : theme.colors.textColor};
  &:hover {
    background-color: #f7fafc;
  }
`;

export const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  border-style: solid;
  border-width: 0.15em 0.15em 0 0;
  content: "";
  display: inline-block;
  height: 0.45em;
  width: 0.45em;
  position: relative;
  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(-45deg)" : "rotate(135deg)"};
  transition: transform 0.2s ease;
  vertical-align: middle;
  margin-left: 8px;
`;
