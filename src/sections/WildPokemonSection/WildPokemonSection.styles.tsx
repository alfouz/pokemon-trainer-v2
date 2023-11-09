import styled from "styled-components";

export const Container = styled.div`
  background: red;
  padding: 40px 4px;
  display: grid;
  grid-template-rows: 1fr 80px 1fr auto;
`;

export const SpriteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomContainer = styled.div`
  margin: 12px;
`;

export const ZonesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
