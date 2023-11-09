import styled from "styled-components";

export const Container = styled.div`
  width: 50px;
  height: 50px;
  margin: 4px;
  border: 1px solid black;
  &:active {
    border: 1px solid rgb(182, 182, 182);
  }
`;
export const StyledImage = styled.img<{ selected: boolean }>`
  image-rendering: pixelated;
  filter: ${({ selected }) => (selected ? "grayscale(0)" : "grayscale(1)")};
  transition: 0.2s ease-in-out;
  &:hover {
    filter: grayscale(0);
  }
  cursor: pointer;
`;
