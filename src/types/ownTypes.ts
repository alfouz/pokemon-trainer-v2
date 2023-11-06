import PokemonTypes from "../consts/PokemonTypes";
import { OwnMove, OwnPokemonType, OwnStats, OwnTiers } from "./utilTypes";

export interface ConcretePokemon {
  id: string;
  name: string;
  base_experience: number;
  height: number;
  move: OwnMove;
  sprite: string | null;
  stats: OwnStats;
  types: OwnPokemonType[];
  tier: OwnTiers;
}

export type OwnType = (typeof PokemonTypes)[number];
