import styled from "styled-components";
import { OwnTiers } from "../../types/utilTypes";
import { strippedCSS } from "../../utils/stylingFunctions";

export const Container = styled.div<{ tier: OwnTiers }>`
  width: 256px;
  height: 344px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid black;
  background: white;
  ${({ tier, theme }) => strippedCSS(theme.colors.tier[tier])};
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
