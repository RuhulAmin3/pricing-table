import styled from "styled-components";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const TooltipTrigger = styled.span`
  cursor: pointer;
  color: ${({ theme }) => (theme as any).colors.textColor};
  margin-left: 4px;
`;

export const TooltipContent = styled.div<{
  $isVisible: boolean;
  $isInfo: boolean;
}>`
  position: absolute;
  bottom: ${({ $isInfo }) => ($isInfo ? "28px" : "22px")};
  left: ${({ $isInfo }) => ($isInfo ? "-80px" : "50%")};
  transform: translateX(-50%);
  background-color: #ffffff;
  color: ${({ theme }) => (theme as any).colors.textColor};
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  width: 100%;
  min-width: 250px;
  z-index: 10;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s, visibility 0.3s;
  box-shadow: 0 0 18px 0 rgba(73, 104, 126, 0.2);

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: ${({ $isInfo }) => ($isInfo ? "216px" : "20px")};
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #ffffff transparent transparent transparent;
  }
`;
