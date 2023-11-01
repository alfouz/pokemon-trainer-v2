import styled from "styled-components";

export const Container = styled.div`
  width: 96px;
  height: 96px;
  cursor: pointer;
  background: white;
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
