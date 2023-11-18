import { ConcretePokemon } from "../types/ownTypes";
import PokemonMoves from "./PokemonMoves";

export const RockBadgeTeam: ConcretePokemon[] = [
  {
    id: "geodude-rock-gym",
    name: "geodude",
    base_experience: 60,
    height: 4,
    move: PokemonMoves.rock.mid,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    stats: {
      hp: 150,
      attack: 100,
      defense: 120,
      speed: 40,
    },
    types: [
      {
        name: "rock",
      },
    ],
    tier: "common",
  },
  {
    id: "bonsly-rock-gym",
    name: "bonsly",
    base_experience: 58,
    height: 5,
    move: PokemonMoves.rock.low,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    stats: {
      hp: 150,
      attack: 140,
      defense: 100,
      speed: 30,
    },
    types: [
      {
        name: "rock",
      },
    ],
    tier: "common",
  },
  {
    id: "anorith-rock-gym",
    name: "anorith",
    base_experience: 71,
    height: 7,
    move: PokemonMoves.rock.mid,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    stats: {
      hp: 150,
      attack: 160,
      defense: 70,
      speed: 95,
    },
    types: [
      {
        name: "rock",
      },
      {
        name: "bug",
      },
    ],
    tier: "common",
  },
  {
    id: "larvitar-rock-gym",
    name: "larvitar",
    base_experience: 60,
    height: 6,
    move: PokemonMoves.rock.mid,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    stats: {
      hp: 150,
      attack: 130,
      defense: 70,
      speed: 60,
    },
    types: [
      {
        name: "rock",
      },
      {
        name: "ground",
      },
    ],
    tier: "common",
  },
  {
    id: "cranidos-rock-gym",
    name: "cranidos",
    base_experience: 70,
    height: 9,
    move: PokemonMoves.rock.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    stats: {
      hp: 170,
      attack: 190,
      defense: 60,
      speed: 78,
    },
    types: [
      {
        name: "rock",
      },
    ],
    tier: "common",
  },
  {
    id: "onix-rock-gym",
    name: "onix",
    base_experience: 77,
    height: 88,
    move: PokemonMoves.rock.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    stats: {
      hp: 150,
      attack: 100,
      defense: 150,
      speed: 90,
    },
    types: [
      {
        name: "rock",
      },
      {
        name: "ground",
      },
    ],
    tier: "common",
  },
];

export const WaterBadgeTeam: ConcretePokemon[] = [
  {
    id: "staryu-water-gym",
    name: "staryu",
    base_experience: 68,
    height: 8,
    move: PokemonMoves.water.mid,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    stats: {
      hp: 130,
      attack: 90,
      defense: 75,
      speed: 105,
    },
    types: [
      {
        name: "water",
      },
    ],
    tier: "common",
  },
  {
    id: "wooper-water-gym",
    name: "wooper",
    base_experience: 42,
    height: 4,
    move: PokemonMoves.water.mid,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    stats: {
      hp: 162,
      attack: 92,
      defense: 60,
      speed: 35,
    },
    types: [
      {
        name: "water",
      },
      {
        name: "ground",
      },
    ],
    tier: "common",
  },
  {
    id: "corphish-water-gym",
    name: "corphish",
    base_experience: 62,
    height: 6,
    move: PokemonMoves.water.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    stats: {
      hp: 151,
      attack: 140,
      defense: 77,
      speed: 55,
    },
    types: [
      {
        name: "water",
      },
    ],
    tier: "common",
  },
  {
    id: "buizel-water-gym",
    name: "buizel",
    base_experience: 66,
    height: 7,
    move: PokemonMoves.water.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    stats: {
      hp: 162,
      attack: 120,
      defense: 50,
      speed: 105,
    },
    types: [
      {
        name: "water",
      },
    ],
    tier: "common",
  },
  {
    id: "corsola-water-gym",
    name: "corsola",
    base_experience: 144,
    height: 6,
    move: PokemonMoves.water.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    stats: {
      hp: 172,
      attack: 110,
      defense: 115,
      speed: 55,
    },
    types: [
      {
        name: "water",
      },
      {
        name: "rock",
      },
    ],
    tier: "common",
  },
  {
    id: "starmie-water-gym",
    name: "starmie",
    base_experience: 184,
    height: 11,
    move: PokemonMoves.water.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    stats: {
      hp: 167,
      attack: 130,
      defense: 105,
      speed: 135,
    },
    types: [
      {
        name: "water",
      },
      {
        name: "psychic",
      },
    ],
    tier: "common",
  },
];

export const ElectricBadgeTeam: ConcretePokemon[] = [
  {
    id: "voltorb-electric-gym",
    name: "voltorb",
    base_experience: 66,
    height: 5,
    move: PokemonMoves.electric.mid,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    stats: {
      hp: 140,
      attack: 90,
      defense: 75,
      speed: 120,
    },
    types: [
      {
        name: "electric",
      },
    ],
    tier: "common",
  },
  {
    id: "magnemite-electric-gym",
    name: "magnemite",
    base_experience: 65,
    height: 3,
    move: PokemonMoves.steel.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    stats: {
      hp: 130,
      attack: 100,
      defense: 90,
      speed: 65,
    },
    types: [
      {
        name: "electric",
      },
      {
        name: "steel",
      },
    ],
    tier: "common",
  },
  {
    id: "chinchou-electric-gym",
    name: "chinchou",
    base_experience: 66,
    height: 5,
    move: PokemonMoves.water.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    stats: {
      hp: 180,
      attack: 90,
      defense: 65,
      speed: 87,
    },
    types: [
      {
        name: "electric",
      },
      {
        name: "water",
      },
    ],
    tier: "common",
  },
  {
    id: "luxio-electric-gym",
    name: "luxio",
    base_experience: 127,
    height: 9,
    move: PokemonMoves.electric.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    stats: {
      hp: 167,
      attack: 140,
      defense: 69,
      speed: 80,
    },
    types: [
      {
        name: "electric",
      },
    ],
    tier: "common",
  },
  {
    id: "raichu-electric-gym",
    name: "raichu",
    base_experience: 243,
    height: 8,
    move: PokemonMoves.electric.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    stats: {
      hp: 167,
      attack: 150,
      defense: 80,
      speed: 130,
    },
    types: [
      {
        name: "electric",
      },
    ],
    tier: "common",
  },
  {
    id: "pachirisu-electric-gym",
    name: "pachirisu",
    base_experience: 142,
    height: 4,
    move: PokemonMoves.electric.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    stats: {
      hp: 200,
      attack: 120,
      defense: 110,
      speed: 130,
    },
    types: [
      {
        name: "electric",
      },
    ],
    tier: "common",
  },
];
