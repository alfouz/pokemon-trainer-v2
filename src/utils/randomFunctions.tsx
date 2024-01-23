import PokemonMoves from "../consts/PokemonMoves";
import { PokemonStat } from "../types/ImportedTypes";
import { OwnType } from "../types/ownTypes";
import { OwnStats, OwnTiers, PowerTypes } from "../types/utilTypes";
import { getRandomNumberRange } from "./genericUtils";
import { getHP, getStat } from "./statFunctions";

const movePowers: PowerTypes[] = ["low", "mid", "strong", "extreme"];
const rangeModify = 0.2;
const tierRanges: { [key in OwnTiers]: number } = {
  common: 6000,
  rare: 8500,
  veryrare: 9850,
  legendary: 9950,
  mythic: 9995,
  final: 9999,
};
const moveChances = [50, 35, 10, 5];

const tierImprovements: { [key in OwnTiers]: number } = {
  common: 0,
  rare: 5,
  veryrare: 15,
  legendary: 30,
  mythic: 50,
  final: 70,
};

export const getMove = (type: OwnType, tier: OwnTiers) => {
  const move = getRandomNumberRange(0, 100) + tierImprovements[tier];
  if (move < moveChances[0]) {
    return PokemonMoves[type][movePowers[0]];
  }
  if (move < moveChances[0] + moveChances[1]) {
    return PokemonMoves[type][movePowers[1]];
  }
  if (move < moveChances[0] + moveChances[1] + moveChances[2]) {
    return PokemonMoves[type][movePowers[2]];
  }
  return PokemonMoves[type][movePowers[2]];
};

export const selectRandomType = (types: OwnType[]) => {
  return types[getRandomNumberRange(0, types.length)];
};

const getRandomValue = (statValue: number, tier: OwnTiers) => {
  const baseValue = statValue + tierImprovements[tier];
  const range = baseValue * rangeModify;
  const minValue = Math.floor(baseValue - range);
  const maxValue = Math.floor(baseValue + range);
  return getRandomNumberRange(minValue, maxValue);
};

export const selectRandomStats: (
  stats: PokemonStat[],
  tier: OwnTiers
) => OwnStats = (stats, tier) => {
  return {
    hp: getHP(getRandomValue(stats[0].base_stat, tier)),
    attack: getStat(
      getRandomValue(
        Math.floor((stats[1].base_stat + stats[3].base_stat) / 2),
        tier
      )
    ),
    defense: getStat(
      getRandomValue(
        Math.floor((stats[2].base_stat + stats[4].base_stat) / 2),
        tier
      )
    ),
    speed: getStat(getRandomValue(stats[5].base_stat, tier)),
  };
};

export const getRandomTier: () => OwnTiers = () => {
  const randomValue = getRandomNumberRange(0, 10000);

  if (randomValue < tierRanges.common) {
    return "common";
  }
  if (randomValue < tierRanges.rare) {
    return "rare";
  }
  if (randomValue < tierRanges.veryrare) {
    return "veryrare";
  }
  if (randomValue < tierRanges.legendary) {
    return "legendary";
  }
  if (randomValue < tierRanges.mythic) {
    return "mythic";
  }
  if (randomValue < tierRanges.final) {
    return "final";
  }
  return "common";
};
