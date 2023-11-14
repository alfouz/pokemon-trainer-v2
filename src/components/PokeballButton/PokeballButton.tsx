import { OwnPokeball } from "../../types/utilTypes";
import { Container, StyledImg, StyledSpan } from "./PokeballButton.styles";

type Props = {
  pokeball: OwnPokeball;
  count: number;
  onClick: () => void;
  disabled: boolean;
};

const PokeballButton = ({ pokeball, count, onClick, disabled }: Props) => {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <Container title={pokeball.name} onClick={handleClick} disabled={disabled}>
      <StyledImg src={pokeball.image} />
      <StyledSpan>{pokeball.index === 0 ? "∞" : count}</StyledSpan>
    </Container>
  );
};

export default PokeballButton;
