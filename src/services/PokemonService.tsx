import { Pokemon } from "../types/ImportedTypes";
import { POKEENDPOINTS } from "./consts";
import { fetchPoke } from "./util";

const getPokemonDetails: (pokemon: string | number) => Promise<Pokemon> = (
  pokemon
) => {
  return fetchPoke(`${POKEENDPOINTS.POKEMON_LIST}${pokemon}`);
};

const getPokemonList = () => {
  return fetchPoke(`${POKEENDPOINTS.POKEMON_LIST}?limit=10000&offset=0`);
};

export default {
  getPokemonDetails,
  getPokemonList,
};
