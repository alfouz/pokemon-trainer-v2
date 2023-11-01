import styled from "styled-components";

export const Container = styled.div`
  width: 256px;
  height: 344px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  border-radius: 8px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4px;
  margin-top: 24px;
`;

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 12px;
`;

export const StyledSpan = styled.span`
  color: black;
  font-weight: bold;
`;

export const ConfirmationButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4px;
  margin-top: 4px;
`;
