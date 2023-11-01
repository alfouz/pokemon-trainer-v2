import styled from "styled-components";

export const Container = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: transform 0.2s;
  &: hover {
    transform: scale(1.2);
  }
  &: active {
    transform: scale(1.1);
  }
`;

export const StyledImage = styled.img`
  width: 48px;
  height: 48px;
`;
