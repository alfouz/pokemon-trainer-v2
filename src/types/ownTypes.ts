import { PokemonStat, PokemonType } from "./ImportedTypes";
import PokemonTypes from "../consts/PokemonTypes";
import { OwnMove } from "./utilTypes";

export interface ConcretePokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  move: OwnMove;
  sprite: string | null;
  stats: PokemonStat[];
  types: PokemonType[];
}

export type OwnType = (typeof PokemonTypes)[number];
