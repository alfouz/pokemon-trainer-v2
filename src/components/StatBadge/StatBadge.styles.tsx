import styled from "styled-components";
import { OwnStat } from "../../types/utilTypes";

export const OutterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpanStyled = styled.span`
  font-weight: bold;
  color: black;
`;

export const Container = styled.div<{ stat: OwnStat }>`
  width: 28px;
  margin: 4px;
  font-weight: bold;
  font-size: 12px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  color: white;
  text-align: center;
  box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  border-radius: 8px;
  user-select: none;
  background-color: ${({ theme, stat }) => theme?.colors?.stats?.[stat]};
`;
