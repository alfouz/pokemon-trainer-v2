import { PokemonType } from "./ImportedTypes";
import PokemonTypes from "../consts/PokemonTypes";
import { OwnMove, OwnStats } from "./utilTypes";

export interface ConcretePokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  move: OwnMove;
  sprite: string | null;
  stats: OwnStats;
  types: PokemonType[];
}

export type OwnType = (typeof PokemonTypes)[number];
