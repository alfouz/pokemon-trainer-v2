import PokemonList from "../consts/PokemonList";
import { PokemonHabitat } from "../consts/PokemonZones";
import { OwnZone } from "../types/utilTypes";
import { getRandomNumberRange } from "./genericUtils";

const selectPokemon = (zone: OwnZone) => {
  const totalZoneItems = PokemonHabitat[zone];
  const randomId = getRandomNumberRange(0, totalZoneItems.length);
  const pokemonId = totalZoneItems[randomId].index - 1;
  return PokemonList[pokemonId];
};

export default selectPokemon;
