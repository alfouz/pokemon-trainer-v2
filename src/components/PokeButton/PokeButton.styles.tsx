import styled from "styled-components";

export const Container = styled.div`
  margin: 4px;
  padding: 4px 12px;
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
  white-space: nowrap;
  &: hover {
    transform: scale(1.05);
  }
  &: active {
    transform: scale(1.02);
  }
`;
