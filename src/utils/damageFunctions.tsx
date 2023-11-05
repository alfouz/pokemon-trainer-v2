import PokemonTableTypes from "../consts/PokemonTableTypes";
import PokemonTypes from "../consts/PokemonTypes";
import { ConcretePokemon } from "../types/ownTypes";

export const getDamage = (
  pokemonAttacked: ConcretePokemon,
  pokemonDefensed: ConcretePokemon
) => {
  const getTypeAttacked = PokemonTypes.findIndex(
    (t) => pokemonAttacked.move.type === t
  );
  const getTypesDeffense = pokemonDefensed.types.map((pT) =>
    PokemonTypes.findIndex((t) => pT.name === t)
  );

  const effectiveness = getTypesDeffense.reduce((acc, defType) => {
    return acc * PokemonTableTypes[getTypeAttacked][defType];
  }, 1);

  const damage =
    ((((2 * 50 * 1) / 5 + 2) *
      pokemonAttacked.stats.attack *
      pokemonAttacked.move.power +
      2) /
      pokemonDefensed.stats.defense /
      50 +
      2) *
    effectiveness;

  return Math.floor(damage);
};
