import PokemonList from "../consts/PokemonList";
import { getRandomNumberRange } from "./genericUtils";

const selectPokemon = (maxId: number) => {
  const pokemonId = getRandomNumberRange(0, maxId);
  return PokemonList[pokemonId];
};

export default selectPokemon;
