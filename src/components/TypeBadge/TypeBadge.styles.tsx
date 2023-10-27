import styled from "styled-components";
import { OwnType } from "../../types/ownTypes";

export const Container = styled.div<{ type: OwnType }>`
  width: 96px;
  height: 24px;
  margin: 4px;
  font-weight: bold;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  color: white;
  text-align: center;
  box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  border-radius: 8px;
  user-select: none;
  background-color: ${({ theme, type }) => theme?.colors?.types?.[type]};
`;
