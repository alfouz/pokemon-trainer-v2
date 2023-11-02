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
import { getRandomNumberRange } from "../../utils/genericUtils";
import PokemonBalls from "../../consts/PokemonBalls";

function WildPokemonSection() {
  useCatchPokemon();
  const { removePokemon, currentPokemon } = useCurrentPokemon((s) => s);
  const { getBall } = usePlayerState((s) => s);

  const getBallNow = () => {
    const ball = getRandomNumberRange(0, Object.keys(PokemonBalls).length);
    getBall(ball);
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
        <PokeButton onClick={getBallNow}>Give me ball</PokeButton>
        <PokeButton onClick={removePokemon}>Give me other</PokeButton>
      </BottomContainer>
    </Container>
  );
}

export default WildPokemonSection;
