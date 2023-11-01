import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 640px;
`;

export const CloseButton = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 4px;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
