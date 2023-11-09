import { PokemonZone } from "../../types/utilTypes";
import { Container, StyledImage } from "./PokemonZone.styles";

type Props = {
  zone: PokemonZone;
  selected: boolean;
  onClick: () => void;
};

const PokemonZone = ({ zone, selected, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <StyledImage
        src={zone.image}
        alt={zone.name}
        title={zone.name}
        width={50}
        height={50}
        selected={selected}
      />
    </Container>
  );
};

export default PokemonZone;
