import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 640px;
`;

export const CloseButton = styled.div`
  padding: 2px 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
  align-self: flex-end;
  cursor: pointer;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
