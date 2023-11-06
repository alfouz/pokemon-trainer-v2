import { Pokemon } from "../types/ImportedTypes";
import { ConcretePokemon } from "../types/ownTypes";
import { getPokemonId } from "./genericUtils";
import {
  getMove,
  getRandomTier,
  selectRandomStats,
  selectRandomType,
} from "./randomFunctions";

const getWildPokemon: (pokemon: Pokemon) => ConcretePokemon = (pokemon) => {
  const tier = getRandomTier();
  return {
    id: getPokemonId(pokemon.name),
    name: pokemon.name,
    base_experience: pokemon.base_experience,
    height: pokemon.height,
    is_default: pokemon.is_default,
    order: pokemon.order,
    weight: pokemon.weight,
    ability: pokemon.abilities[0],
    held_item: pokemon.held_items[0],
    move: getMove(
      selectRandomType(pokemon.types.map((t) => t.type.name)),
      tier
    ),
    sprite: pokemon.sprites.front_default,
    stats: selectRandomStats(pokemon.stats, tier),
    types: pokemon.types.map((t) => t.type),
    tier,
  };
};

export default getWildPokemon;
