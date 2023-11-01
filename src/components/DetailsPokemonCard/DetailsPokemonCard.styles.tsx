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

export const NameSpan = styled.span`
  color: black;
  font-weight: bold;
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

export const StatsContainer = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: row;
  gap: 8px;
`;

export const MoveContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12px;
`;
