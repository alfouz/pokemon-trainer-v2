import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: #e9e9e9;
  border-bottom: 2px solid ${({ theme }) => theme.colors.general.border};
`;

export const MedalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const TitleCard = styled.div`
  color: black;
  padding-top: 4px;
`;
