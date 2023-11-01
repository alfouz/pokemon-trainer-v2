import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border: 2px solid black;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  user-select: none;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.05);
  }
`;

export const StyledImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const StyledSpan = styled.span`
  font-weight: bold;
  color: black;
`;
