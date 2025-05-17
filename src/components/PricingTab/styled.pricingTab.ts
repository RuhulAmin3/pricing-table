import styled from "styled-components";

export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  gap: 10px;
  flex-wrap: wrap;
`;

export const TabButton = styled.div<{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? " #b78deb " : " #49687e")};
  border-bottom: ${(props) => (props.$isActive ? "1px solid #b78deb" : "none")};
  cursor: pointer;
  font-weight: ${(props) => (props.$isActive ? "600" : "normal")};
  transition: all 0.2s ease;
  position: relative;
  outline: none;
  padding-bottom: 3px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #c6d7e3;
  margin: 0 10px;
`;

export const DiscountLabel = styled.span`
  background: rgba(183, 141, 235, 0.15);
  border-radius: 40px;
  cursor: pointer;
  color: #49687e;
  padding: 5px 12px;
  margin-left: 10px;
`;
