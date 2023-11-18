import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background: #cdcbcb;
  border: 1px solid black;
  border-radius: 8px;
`;

export const InnerContainer = styled.div<{ percent: number }>`
  height: 100%;
  width: ${({ percent }) => percent}%;
  background: #3f8d3f;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.3s ease-in-out;
  border-radius: 8px;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  position: absolute;
  color: black;
  left: 50%;
  transform: translateX(-50%);
`;
