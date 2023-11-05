import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background: grey;
`;

export const InnerContainer = styled.div<{ percent: number }>`
  height: 100%;
  width: ${({ percent }) => percent}%;
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  position: absolute;
  color: black;
  left: 50%;
  transform: translateX(-50%);
`;
