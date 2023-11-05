import { Container, StyledSpan, InnerContainer } from "./LifeBar.styles";

type Props = {
  total: number;
  current: number;
};

const LifeBar = ({ total, current }: Props) => {
  const percent = Math.round((current / total) * 100);
  return (
    <Container>
      <InnerContainer percent={percent}></InnerContainer>
      <StyledSpan>
        {current}/{total}
      </StyledSpan>
    </Container>
  );
};

export default LifeBar;
