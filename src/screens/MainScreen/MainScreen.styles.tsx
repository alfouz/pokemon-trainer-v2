import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: minmax(100px, auto);
  background: white;
`;
