import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 100px auto;
  place-items: center;
`;

export const MedalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: auto 400px;
`;
