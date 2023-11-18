import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  background: white;
  border: 1px solid black;
  padding: 12px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const LeftContainer = styled.div``;

export const CenterContainer = styled.div`
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const RightContainer = styled.div``;
