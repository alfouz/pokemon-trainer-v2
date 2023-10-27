import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpriteContainer = styled.div`
  flex: 1;
  padding: 24px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BottomContainer = styled.div`
  flex: 1;
  padding: 24px 8px;
`;

export const SpriteImage = styled.img`
  width: 176px;
  height: 176px;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
`;

export const TypesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
