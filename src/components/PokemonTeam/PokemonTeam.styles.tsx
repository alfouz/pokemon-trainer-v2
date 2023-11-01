import styled from "styled-components";

export const Container = styled.div`
  background: cyan;
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

export const StyledImage = styled.img`
  width: 48px;
  height: 48px;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
`;

export const InnerContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  gap: 4px;
  flex-wrap: wrap;
`;
