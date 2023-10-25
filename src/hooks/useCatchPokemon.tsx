import { useEffect } from "react";
import usePlayerState from "../state/usePlayerState";
import selectPokemon from "../utils/selectPokemon";
import useCurrentPokemon from "../state/useCurrentPokemon";

const useCatchPokemon = () => {
  const { speed, maxPokemonId } = usePlayerState((s) => s.options);
  const { getPokemon, currentPokemon } = useCurrentPokemon((s) => s);
  useEffect(() => {
    if (!currentPokemon) {
      setTimeout(() => {
        getPokemon(selectPokemon(maxPokemonId).id);
      }, speed);
    }
  }, [currentPokemon, getPokemon, maxPokemonId, speed]);
};

export default useCatchPokemon;
