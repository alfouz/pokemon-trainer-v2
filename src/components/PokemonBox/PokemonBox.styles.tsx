import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-top: 2px solid ${({ theme }) => theme.colors.general.border};
  border-left: 2px solid ${({ theme }) => theme.colors.general.border};
  background: #2f4c55;
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
