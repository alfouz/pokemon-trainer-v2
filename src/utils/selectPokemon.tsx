import PokemonList from "../consts/PokemonList";
import { PokemonHabitat } from "../consts/PokemonZones";
import { OwnZone, PokemonChance } from "../types/utilTypes";
import { getRandomNumberRange } from "./genericUtils";

const generateArrayOptions = (pokes: PokemonChance[]) => {
  return pokes.reduce((acc: number[], current) => {
    return acc.concat(new Array(current.chance).fill(current.index));
  }, []);
};

const selectPokemon = (zone: OwnZone) => {
  const totalZoneItems = PokemonHabitat[zone];
  const totalOptions = generateArrayOptions(totalZoneItems);
  const randomId = getRandomNumberRange(0, totalOptions.length);
  const pokemonId = totalOptions[randomId] - 1;
  return PokemonList[pokemonId];
};

export default selectPokemon;
