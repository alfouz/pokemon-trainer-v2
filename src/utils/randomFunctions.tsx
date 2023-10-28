import PokemonMoves from "../consts/PokemonMoves";
import { PokemonStat } from "../types/ImportedTypes";
import { OwnType } from "../types/ownTypes";
import { OwnStats, PowerTypes } from "../types/utilTypes";
import { getRandomNumberRange } from "./genericUtils";

const movePowers: PowerTypes[] = ["low", "mid", "strong", "extreme"];
const rangeModify = 0.2;

export const getMove = (type: OwnType) => {
  const power = movePowers[getRandomNumberRange(0, 4)];
  return PokemonMoves[type][power];
};

export const selectRandomType = (types: OwnType[]) => {
  return types[getRandomNumberRange(0, types.length)];
};

const getRandomValue = (statValue: number) => {
  const range = statValue * rangeModify;
  const minValue = Math.floor(statValue - range);
  const maxValue = Math.floor(statValue + range);
  return getRandomNumberRange(minValue, maxValue);
};

export const selectRandomStats: (stats: PokemonStat[]) => OwnStats = (
  stats: PokemonStat[]
) => {
  return {
    hp: getRandomValue(stats[0].base_stat),
    attack: getRandomValue(
      Math.floor((stats[1].base_stat + stats[3].base_stat) / 2)
    ),
    defense: getRandomValue(
      Math.floor((stats[2].base_stat + stats[4].base_stat) / 2)
    ),
    speed: getRandomValue(stats[5].base_stat),
  };
};
