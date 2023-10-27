import styled from "styled-components";

export const Container = styled.div`
  width: 256px;
  height: 256px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid black;
  background: white;
  border-radius: 8px;
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
