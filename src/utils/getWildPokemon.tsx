import { Pokemon } from "../types/ImportedTypes";
import { ConcretePokemon } from "../types/ownTypes";
import {
  getMove,
  selectRandomStats,
  selectRandomType,
} from "./randomFunctions";

const getWildPokemon: (pokemon: Pokemon) => ConcretePokemon = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name,
    base_experience: pokemon.base_experience,
    height: pokemon.height,
    is_default: pokemon.is_default,
    order: pokemon.order,
    weight: pokemon.weight,
    ability: pokemon.abilities[0],
    held_item: pokemon.held_items[0],
    move: getMove(selectRandomType(pokemon.types.map((t) => t.type.name))),
    sprite: pokemon.sprites.front_default,
    stats: selectRandomStats(pokemon.stats),
    types: pokemon.types,
  };
};

export default getWildPokemon;
