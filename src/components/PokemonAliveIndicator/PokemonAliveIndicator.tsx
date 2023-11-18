import { Container, PokeballIndicator } from "./PokemonAliveIndicator.styles";

type Props = {
  total: number;
};

const PokemonAliveIndicator = ({ total }: Props) => {
  return (
    <Container>
      {Array(total)
        .fill(0)
        .map(() => (
          <PokeballIndicator />
        ))}
    </Container>
  );
};

export default PokemonAliveIndicator;
