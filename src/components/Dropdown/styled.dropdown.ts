import styled from "styled-components"

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`
export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 12px;
  background-color: #f8f9fa;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #cbd5e0;
  }
  
  &:focus {
    outline: none;
    border-color: #9f7aea;
    box-shadow: 0 0 0 2px rgba(159, 122, 234, 0.2);
  }
`

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 10;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`

export const DropdownItem = styled.div<{ $isSelected: boolean }>`
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${({ $isSelected }) => ($isSelected ? "#f7fafc" : "transparent")};
  
  &:hover {
    background-color: #f7fafc;
  }
`

export const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  border-style: solid;
  border-width: 0.15em 0.15em 0 0;
  content: '';
  display: inline-block;
  height: 0.45em;
  width: 0.45em;
  position: relative;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "rotate(135deg)")};
  transition: transform 0.2s ease;
  vertical-align: middle;
  margin-left: 8px;
`