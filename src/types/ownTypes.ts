import PokemonTypes from "../consts/PokemonTypes";
import { OwnMove, OwnPokemonType, OwnStats } from "./utilTypes";

export interface ConcretePokemon {
  id: string;
  name: string;
  base_experience: number;
  height: number;
  move: OwnMove;
  sprite: string | null;
  stats: OwnStats;
  types: OwnPokemonType[];
}

export type OwnType = (typeof PokemonTypes)[number];
