import tierTags from "../../language/tiersTags";
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
  TierTag,
  TypesContainer,
} from "./DetailsPokemonCard.styles";

type Props = {
  pokemon: ConcretePokemon;
  showTier?: boolean;
};

function DetailsPokemonCard({ pokemon, showTier = true }: Props) {
  return (
    <Container>
      {pokemon.sprite && <SpriteImage src={pokemon.sprite} />}
      {pokemon.tier !== "common" && showTier && (
        <TierTag tier={pokemon.tier}>{tierTags[pokemon.tier]}</TierTag>
      )}
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

export default DetailsPokemonCard;
