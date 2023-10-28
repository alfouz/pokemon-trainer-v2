import { statsText } from "../../language/location";
import { OwnStat } from "../../types/utilTypes";
import { Container, OutterContainer, SpanStyled } from "./StatBadge.styles";

type Props = {
  stat: OwnStat;
  value: number;
};

const StatBadge = ({ stat, value }: Props) => {
  return (
    <OutterContainer>
      <SpanStyled>{statsText[stat].short}</SpanStyled>
      <Container title={statsText[stat].long} stat={stat}>
        {value}
      </Container>
    </OutterContainer>
  );
};
export default StatBadge;
