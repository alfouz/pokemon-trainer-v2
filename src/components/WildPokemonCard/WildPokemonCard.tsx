import { ConcretePokemon } from "../../types/ownTypes";
import TypeBadge from "../TypeBadge/TypeBadge";
import {
  Container,
  SpriteImage,
  TypesContainer,
} from "./WildPokemonCard.styles";

type Props = {
  pokemon: ConcretePokemon;
};

function WildPokemonCard({ pokemon }: Props) {
  return (
    <Container>
      {pokemon.sprite && <SpriteImage src={pokemon.sprite} />}
      <TypesContainer>
        {pokemon.types.map((type) => (
          <TypeBadge type={type.type.name} key={type.type.name} />
        ))}
      </TypesContainer>
    </Container>
  );
}

export default WildPokemonCard;
