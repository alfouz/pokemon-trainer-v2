import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 50px;
  height: 50px;
  margin: 4px;
`;

const VibrateAnimation = keyframes`
 0% { transform: scale(1.05) }
 50% { transform: scale(1.00) }
 100% { transform: scale(1.05) }
`;

export const StyledImage = styled.img<{ selected: boolean }>`
  image-rendering: pixelated;
  filter: ${({ selected }) => (selected ? "grayscale(0)" : "grayscale(1)")};
  transition: 0.2s ease-in-out;
  &:hover {
    filter: grayscale(0);
  }
  cursor: pointer;
  animation: ${({ selected }) =>
    selected
      ? css`
          ${VibrateAnimation} 1s linear infinite
        `
      : "none"};
  border: 1px solid black;
  &:active {
    border: 1px solid rgb(182, 182, 182);
  }
`;
