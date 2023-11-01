import {
  BottomContainer,
  Container,
  SpriteContainer,
} from "./WildPokemonSection.styles";
import PokeButton from "../../components/PokeButton/PokeButton";
import useCurrentPokemon from "../../state/useCurrentPokemon";
import useCatchPokemon from "../../hooks/useCatchPokemon";
import WildPokemonCard from "../../components/WildPokemonCard/WildPokemonCard";
import PokeballSelector from "../../components/PokeballSelector/PokeballSelector";
import usePlayerState from "../../state/usePlayerState";

function WildPokemonSection() {
  useCatchPokemon();
  const { removePokemon, currentPokemon } = useCurrentPokemon((s) => s);
  const { addPokemon } = usePlayerState((s) => s);

  const handleCatch = () => {
    currentPokemon && addPokemon(currentPokemon);
  };
  return (
    <Container>
      <SpriteContainer>
        {currentPokemon ? (
          <WildPokemonCard pokemon={currentPokemon} />
        ) : (
          <span>LOADING</span>
        )}
      </SpriteContainer>
      <PokeballSelector />
      <BottomContainer>
        <PokeButton onClick={handleCatch}>Catch</PokeButton>
        <PokeButton onClick={removePokemon}>Give me other</PokeButton>
      </BottomContainer>
    </Container>
  );
}

export default WildPokemonSection;
