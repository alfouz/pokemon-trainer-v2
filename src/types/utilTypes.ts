import { OwnType } from "./ownTypes";

export type PowerTypes = "low" | "mid" | "strong" | "extreme";

export type OwnMove = {
  name: string;
  id: string;
  power: number;
  type: OwnType;
};

export type OwnStat = "attack" | "hp" | "defense" | "speed";

export type OwnStats = {
  [key in OwnStat]: number;
};

export type OwnMedal = {
  name: string;
  image: string;
};
