import { getPokemonName } from "../../language/location";
import { ConcretePokemon } from "../../types/ownTypes";
import { OwnStat } from "../../types/utilTypes";
import MoveBadge from "../MoveBadge/MoveBadge";
import StatBadge from "../StatBadge/StatBadge";
import TypeBadge from "../TypeBadge/TypeBadge";
import {
  Container,
  MoveContainer,
  NameSpan,
  SpriteImage,
  StatsContainer,
  TypesContainer,
} from "./WildPokemonCard.styles";

type Props = {
  pokemon: ConcretePokemon;
};

function WildPokemonCard({ pokemon }: Props) {
  return (
    <Container tier={pokemon.tier}>
      {pokemon.sprite && <SpriteImage src={pokemon.sprite} />}
      <NameSpan>{getPokemonName(pokemon.name)}</NameSpan>
      <TypesContainer>
        {pokemon.types.map((type) => (
          <TypeBadge type={type.name} key={type.name} />
        ))}
      </TypesContainer>
      <StatsContainer>
        {Object.keys(pokemon.stats).map((stat: string) => (
          <StatBadge
            stat={stat as OwnStat}
            value={pokemon.stats[stat as OwnStat]}
            key={stat}
          />
        ))}
      </StatsContainer>
      <MoveContainer>
        <MoveBadge move={pokemon.move} />
      </MoveContainer>
    </Container>
  );
}

export default WildPokemonCard;
