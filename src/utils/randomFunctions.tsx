import PokemonMoves from "../consts/PokemonMoves";
import { OwnType } from "../types/ownTypes";
import { PowerTypes } from "../types/utilTypes";
import { getRandomNumberRange } from "./genericUtils";

const movePowers: PowerTypes[] = ["low", "mid", "strong", "extreme"];

export const getMove = (type: OwnType) => {
  const power = movePowers[getRandomNumberRange(0, 4)];
  return PokemonMoves[type][power];
};

export const selectRandomType = (types: OwnType[]) => {
  return types[getRandomNumberRange(0, types.length)];
};
