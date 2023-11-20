import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: #231e2f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonStyled = styled.div`
  margin: 4px;
  padding: 4px 12px;
  width: 512px;
  border: 2px solid #000;
  font-weight: 500;
  background: #f56161;
  cursor: pointer;
  display: flex;
  user-select: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.2s;
  white-space: nowrap;
  border-radius: 24px;
  &: hover {
    transform: scale(1.02);
  }
  &: active {
    transform: scale(1.01);
  }
`;
