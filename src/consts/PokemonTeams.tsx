import { ConcretePokemon } from "../types/ownTypes";
import PokemonMoves from "./PokemonMoves";

export const RockBadgeTeam: ConcretePokemon[] = [
  {
    id: "geodude-rock-gym",
    name: "geodude",
    base_experience: 60,
    height: 4,
    move: PokemonMoves.rock.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    stats: {
      hp: 120,
      attack: 80,
      defense: 80,
      speed: 20,
    },
    types: [
      {
        name: "rock",
      },
    ],
  },
  {
    id: "onix-rock-gym",
    name: "onix",
    base_experience: 77,
    height: 88,
    move: PokemonMoves.rock.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    stats: {
      hp: 120,
      attack: 55,
      defense: 120,
      speed: 70,
    },
    types: [
      {
        name: "rock",
      },
    ],
  },
];
