import { ConcretePokemon } from "../../types/ownTypes";
import { Container, InnerContainer, StyledSpan } from "./PokemonTeam.styles";
import PokemonTeamCard from "../PokemonTeamCard/PokemonTeamCard";
import DetailsPokemonModal from "../DetailsPokemonModal/DetailsPokemonModal";
import { useState } from "react";

type Props = {
  pokemons: ConcretePokemon[];
};

const PokemonTeam = ({ pokemons }: Props) => {
  const [detailedPokemon, setDetailedPokemon] = useState<ConcretePokemon>();
  return (
    <Container>
      <StyledSpan>Team {pokemons.length}/6</StyledSpan>
      <InnerContainer>
        {pokemons.map((p) => (
          <PokemonTeamCard pokemon={p} onClick={setDetailedPokemon} />
        ))}
      </InnerContainer>
      <DetailsPokemonModal
        pokemon={detailedPokemon}
        onClose={() => setDetailedPokemon(undefined)}
      />
    </Container>
  );
};

export default PokemonTeam;
