import styled from "styled-components";

export const Container = styled.div<{ disabled: boolean }>`
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: transform 0.2s;
  &: hover {
    transform: scale(${({ disabled }) => (!disabled ? "1.2" : "1")});
  }
  &: active {
    transform: scale(${({ disabled }) => (!disabled ? "1.1" : "1")});
  }
`;

export const StyledImage = styled.img<{ disabled: boolean }>`
  width: 48px;
  height: 48px;
  filter: grayscale(${({ disabled }) => (disabled ? 1 : 0)});
`;
