import styled from "styled-components";

export const Container = styled.div`
  margin: 4px;
  width: 128px;
  height: 40px;
  border: 2px solid #000;
  font-weight: 500;
  background: #ff5e5e;
  cursor: pointer;
  display: flex;
  user-select: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.2s;
  &: hover {
    transform: scale(1.05);
  }
  &: active {
    transform: scale(1.02);
  }
`;
