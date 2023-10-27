import {
  BottomContainer,
  Container,
  SpriteContainer,
} from "./WildPokemonSection.styles";
import PokeButton from "../../components/PokeButton/PokeButton";
import useCurrentPokemon from "../../state/useCurrentPokemon";
import useCatchPokemon from "../../hooks/useCatchPokemon";
import WildPokemonCard from "../../components/WildPokemonCard/WildPokemonCard";

function WildPokemonSection() {
  useCatchPokemon();
  const { removePokemon, currentPokemon } = useCurrentPokemon((s) => s);
  console.log(currentPokemon);
  return (
    <Container>
      <SpriteContainer>
        {currentPokemon ? (
          <WildPokemonCard pokemon={currentPokemon} />
        ) : (
          <span>LOADING</span>
        )}
      </SpriteContainer>
      <BottomContainer>
        <PokeButton onClick={removePokemon}>Give me other</PokeButton>
      </BottomContainer>
    </Container>
  );
}

export default WildPokemonSection;
