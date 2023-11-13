import { useEffect } from "react";
import usePlayerState from "../state/usePlayerState";
import selectPokemon from "../utils/selectPokemon";
import useCurrentPokemon from "../state/useCurrentPokemon";

const useCatchPokemon = () => {
  const {
    options: { speed },
    currentZone,
  } = usePlayerState((s) => s);
  const { getPokemon, currentPokemon } = useCurrentPokemon((s) => s);
  useEffect(() => {
    if (!currentPokemon) {
      setTimeout(() => {
        getPokemon(selectPokemon(currentZone).id);
      }, speed);
    }
  }, [currentPokemon, getPokemon, currentZone, speed]);
};

export default useCatchPokemon;
