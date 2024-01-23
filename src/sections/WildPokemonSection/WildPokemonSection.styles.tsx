import styled from "styled-components";

export const Container = styled.div`
  background: #d78080;
  padding: 40px 4px;
  display: grid;
  grid-template-rows: 1fr 80px 1fr auto;
  position: relative;
  border-right: 2px solid ${({ theme }) => theme.colors.general.border};
`;

export const SpriteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;
`;

export const BottomContainer = styled.div`
  margin: 12px;
`;

export const ZonesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
