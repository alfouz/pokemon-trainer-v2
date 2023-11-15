import styled from "styled-components";
import { OwnTiers } from "../../types/utilTypes";
import { strippedCSS } from "../../utils/stylingFunctions";

export const Container = styled.div<{ tier: OwnTiers }>`
  width: 96px;
  height: 96px;
  cursor: pointer;
  background: white;
  ${({ tier, theme }) => strippedCSS(theme.colors.tier[tier])};
  border: 1px solid black;
  transition: transform 0.2s;
  &: hover {
    transform: scale(1.2);
  }
  &: active {
    transform: scale(1.1);
  }
`;

export const StyledImage = styled.img`
  width: 96px;
  height: 96px;
`;
