import { ConcretePokemon } from "../../types/ownTypes";
import { Container, InnerContainer, StyledSpan } from "./PokemonBox.styles";
import PokemonSmallCard from "../PokemonSmallCard/PokemonSmallCard";
import { useState } from "react";
import DetailsPokemonModal from "../DetailsPokemonModal/DetailsPokemonModal";

type Props = {
  pokemons: ConcretePokemon[];
};

const PokemonBox = ({ pokemons }: Props) => {
  const [detailedPokemon, setDetailedPokemon] = useState<ConcretePokemon>();
  return (
    <Container>
      <StyledSpan>Box</StyledSpan>
      <InnerContainer>
        {pokemons.map((p) => (
          <PokemonSmallCard pokemon={p} onClick={setDetailedPokemon} />
        ))}
      </InnerContainer>
      <DetailsPokemonModal
        pokemon={detailedPokemon}
        onClose={() => setDetailedPokemon(undefined)}
      />
    </Container>
  );
};

export default PokemonBox;
