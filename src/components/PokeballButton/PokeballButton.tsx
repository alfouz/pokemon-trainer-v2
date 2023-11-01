import { OwnPokeball } from "../../types/utilTypes";
import { Container, StyledImg, StyledSpan } from "./PokeballButton.styles";

type Props = {
  pokeball: OwnPokeball;
  count: number;
};

const PokeballButton = ({ pokeball, count }: Props) => {
  return (
    <Container title={pokeball.name}>
      <StyledImg src={pokeball.image} />
      <StyledSpan>{count}</StyledSpan>
    </Container>
  );
};

export default PokeballButton;
