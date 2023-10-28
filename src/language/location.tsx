import { OwnStat } from "../types/utilTypes";

export const statsText: { [key in OwnStat]: { short: string; long: string } } =
  {
    hp: {
      short: "HP",
      long: "HP",
    },
    attack: {
      short: "ATT",
      long: "Attack",
    },
    defense: {
      short: "DEF",
      long: "Defense",
    },
    speed: {
      short: "SPD",
      long: "Speed",
    },
  };

export const getMoveName = (text: string) => {
  return text
    .split("-")
    .map((p) => `${p.charAt(0).toUpperCase()}${p.substring(1)}`)
    .join(" ");
};

export const getPokemonName = (text: string) => {
  return `${text.charAt(0).toUpperCase()}${text.substring(1)}`;
};
