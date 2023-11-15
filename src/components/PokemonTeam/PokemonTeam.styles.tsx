import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.general.border};
  border-left: 2px solid ${({ theme }) => theme.colors.general.border};
  background: #734646;
`;

export const StyledImage = styled.img`
  width: 48px;
  height: 48px;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
`;

export const InnerContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
`;
