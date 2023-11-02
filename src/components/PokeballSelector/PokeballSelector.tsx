import usePlayerState from "../../state/usePlayerState";
import { Container } from "./PokeballSelector.styles";
import PokemonBalls from "../../consts/PokemonBalls";
import PokeballButton from "../PokeballButton/PokeballButton";
import { OwnBall } from "../../types/utilTypes";
import useCurrentPokemon from "../../state/useCurrentPokemon";
import { getRandomNumberRange } from "../../utils/genericUtils";

const maxPokemonInBox = 40;

const PokeballSelector = () => {
  const { removePokemon, currentPokemon } = useCurrentPokemon((s) => s);
  const {
    addPokemon,
    inventory: { balls },
    removeBall,
    pokemons,
  } = usePlayerState((s) => s);

  const handleCatch = (chance: number, index: number) => {
    removeBall(index);
    const value = getRandomNumberRange(0, 100);
    if (value < chance) {
      currentPokemon && addPokemon(currentPokemon);
      removePokemon();
    }
  };

  return (
    <Container>
      {Object.keys(PokemonBalls).map((b: string, index: number) => (
        <PokeballButton
          disabled={
            pokemons.length >= maxPokemonInBox ||
            !currentPokemon ||
            balls[PokemonBalls[b as OwnBall].index] <= 0
          }
          onClick={() => handleCatch(PokemonBalls[b as OwnBall].chance, index)}
          pokeball={PokemonBalls[b as OwnBall]}
          count={balls[PokemonBalls[b as OwnBall].index]}
        />
      ))}
    </Container>
  );
};

export default PokeballSelector;
