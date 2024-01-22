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
      hp: 200,
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
      hp: 200,
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
      hp: 200,
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
      hp: 200,
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
      hp: 230,
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
      hp: 200,
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
      hp: 180,
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
      hp: 242,
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
      hp: 211,
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
      hp: 222,
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
      hp: 232,
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
      hp: 237,
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
      hp: 210,
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
      hp: 210,
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
      hp: 240,
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
      hp: 227,
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
      hp: 227,
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
      hp: 260,
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

export const GrassBadgeTeam: ConcretePokemon[] = [
  {
    id: "ivysaur-grass-gym",
    name: "ivysaur",
    base_experience: 142,
    height: 10,
    move: PokemonMoves.grass.mid,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    stats: {
      hp: 220,
      attack: 100,
      defense: 100,
      speed: 80,
    },
    types: [
      {
        name: "grass",
      },
      {
        name: "poison",
      },
    ],
    tier: "common",
  },
  {
    id: "parasect-grass-gym",
    name: "parasect",
    base_experience: 142,
    height: 10,
    move: PokemonMoves.grass.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    stats: {
      hp: 230,
      attack: 150,
      defense: 100,
      speed: 50,
    },
    types: [
      {
        name: "grass",
      },
      {
        name: "bug",
      },
    ],
    tier: "common",
  },
  {
    id: "tangela-grass-gym",
    name: "tangela",
    base_experience: 87,
    height: 10,
    move: PokemonMoves.grass.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    stats: {
      hp: 242,
      attack: 125,
      defense: 120,
      speed: 80,
    },
    types: [
      {
        name: "grass",
      },
    ],
    tier: "common",
  },
  {
    id: "breloom-grass-gym",
    name: "breloom",
    base_experience: 161,
    height: 12,
    move: PokemonMoves.fighting.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    stats: {
      hp: 235,
      attack: 200,
      defense: 100,
      speed: 90,
    },
    types: [
      {
        name: "grass",
      },
      {
        name: "fighting",
      },
    ],
    tier: "common",
  },
  {
    id: "leafeon-grass-gym",
    name: "leafeon",
    base_experience: 184,
    height: 10,
    move: PokemonMoves.fighting.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    stats: {
      hp: 250,
      attack: 170,
      defense: 150,
      speed: 120,
    },
    types: [
      {
        name: "grass",
      },
    ],
    tier: "common",
  },
  {
    id: "roserade-grass-gym",
    name: "roserade",
    base_experience: 258,
    height: 9,
    move: PokemonMoves.grass.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    stats: {
      hp: 260,
      attack: 150,
      defense: 120,
      speed: 130,
    },
    types: [
      {
        name: "grass",
      },
      {
        name: "poison",
      },
    ],
    tier: "common",
  },
];

export const PoisonBadgeTeam: ConcretePokemon[] = [
  {
    id: "muk-poison-gym",
    name: "muk",
    base_experience: 175,
    height: 12,
    move: PokemonMoves.poison.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    stats: {
      hp: 290,
      attack: 185,
      defense: 140,
      speed: 80,
    },
    types: [
      {
        name: "poison",
      },
    ],
    tier: "common",
  },
  {
    id: "crobat-poison-gym",
    name: "crobat",
    base_experience: 268,
    height: 18,
    move: PokemonMoves.flying.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    stats: {
      hp: 260,
      attack: 160,
      defense: 120,
      speed: 100,
    },
    types: [
      {
        name: "poison",
      },
      {
        name: "flying",
      },
    ],
    tier: "common",
  },
  {
    id: "toxicroak-poison-gym",
    name: "toxicroak",
    base_experience: 172,
    height: 13,
    move: PokemonMoves.fighting.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    stats: {
      hp: 260,
      attack: 180,
      defense: 85,
      speed: 105,
    },
    types: [
      {
        name: "poison",
      },
      {
        name: "fighting",
      },
    ],
    tier: "common",
  },
  {
    id: "gengar-poison-gym",
    name: "gengar",
    base_experience: 250,
    height: 15,
    move: PokemonMoves.ghost.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    stats: {
      hp: 237,
      attack: 140,
      defense: 95,
      speed: 130,
    },
    types: [
      {
        name: "poison",
      },
      {
        name: "ghost",
      },
    ],
    tier: "common",
  },
  {
    id: "skuntank-poison-gym",
    name: "skuntank",
    base_experience: 168,
    height: 10,
    move: PokemonMoves.dark.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    stats: {
      hp: 280,
      attack: 170,
      defense: 94,
      speed: 108,
    },
    types: [
      {
        name: "poison",
      },
      {
        name: "dark",
      },
    ],
    tier: "common",
  },
  {
    id: "nidoking-poison-gym",
    name: "nidoking",
    base_experience: 168,
    height: 10,
    move: PokemonMoves.ground.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    stats: {
      hp: 290,
      attack: 200,
      defense: 130,
      speed: 110,
    },
    types: [
      {
        name: "poison",
      },
      {
        name: "dark",
      },
    ],
    tier: "common",
  },
];

export const PsychicBadgeTeam: ConcretePokemon[] = [
  {
    id: "hypno-psychic-gym",
    name: "hypno",
    base_experience: 169,
    height: 16,
    move: PokemonMoves.psychic.strong,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    stats: {
      hp: 250,
      attack: 140,
      defense: 140,
      speed: 87,
    },
    types: [
      {
        name: "psychic",
      },
    ],
    tier: "common",
  },
  {
    id: "alakazam-psychic-gym",
    name: "alakazam",
    base_experience: 250,
    height: 15,
    move: PokemonMoves.psychic.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    stats: {
      hp: 237,
      attack: 167,
      defense: 107,
      speed: 140,
    },
    types: [
      {
        name: "psychic",
      },
    ],
    tier: "common",
  },
  {
    id: "slowbro-psychic-gym",
    name: "slowbro",
    base_experience: 172,
    height: 16,
    move: PokemonMoves.water.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    stats: {
      hp: 270,
      attack: 150,
      defense: 145,
      speed: 50,
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
  {
    id: "gardevoir-psychic-gym",
    name: "gardevoir",
    base_experience: 259,
    height: 16,
    move: PokemonMoves.fairy.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    stats: {
      hp: 250,
      attack: 168,
      defense: 138,
      speed: 100,
    },
    types: [
      {
        name: "psychic",
      },
      {
        name: "fairy",
      },
    ],
    tier: "common",
  },
  {
    id: "medicham-psychic-gym",
    name: "medicham",
    base_experience: 144,
    height: 13,
    move: PokemonMoves.fighting.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    stats: {
      hp: 248,
      attack: 190,
      defense: 105,
      speed: 105,
    },
    types: [
      {
        name: "psychic",
      },
      {
        name: "fighting",
      },
    ],
    tier: "common",
  },
  {
    id: "metagross-psychic-gym",
    name: "metagross",
    base_experience: 300,
    height: 16,
    move: PokemonMoves.steel.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    stats: {
      hp: 300,
      attack: 200,
      defense: 180,
      speed: 90,
    },
    types: [
      {
        name: "psychic",
      },
      {
        name: "steel",
      },
    ],
    tier: "common",
  },
];

export const FireBadgeTeam: ConcretePokemon[] = [
  {
    id: "typhlosion-fire-gym",
    name: "typhlosion",
    base_experience: 240,
    height: 17,
    move: PokemonMoves.fire.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    stats: {
      hp: 265,
      attack: 150,
      defense: 120,
      speed: 120,
    },
    types: [
      {
        name: "fire",
      },
    ],
    tier: "common",
  },
  {
    id: "camerupt-fire-gym",
    name: "camerupt",
    base_experience: 161,
    height: 19,
    move: PokemonMoves.ground.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    stats: {
      hp: 268,
      attack: 152,
      defense: 107,
      speed: 60,
    },
    types: [
      {
        name: "fire",
      },
      {
        name: "ground",
      },
    ],
    tier: "common",
  },
  {
    id: "infernape-fire-gym",
    name: "infernape",
    base_experience: 240,
    height: 12,
    move: PokemonMoves.fighting.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    stats: {
      hp: 264,
      attack: 185,
      defense: 102,
      speed: 136,
    },
    types: [
      {
        name: "fire",
      },
      {
        name: "fighting",
      },
    ],
    tier: "common",
  },
  {
    id: "magmortar-fire-gym",
    name: "magmortar",
    base_experience: 270,
    height: 16,
    move: PokemonMoves.fire.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    stats: {
      hp: 269,
      attack: 195,
      defense: 133,
      speed: 112,
    },
    types: [
      {
        name: "fire",
      },
    ],
    tier: "common",
  },
  {
    id: "charizard-fire-gym",
    name: "charizard",
    base_experience: 267,
    height: 17,
    move: PokemonMoves.flying.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    stats: {
      hp: 275,
      attack: 170,
      defense: 121,
      speed: 130,
    },
    types: [
      {
        name: "fire",
      },
      {
        name: "flying",
      },
    ],
    tier: "common",
  },
  {
    id: "arcanine-fire-gym",
    name: "arcanine",
    base_experience: 194,
    height: 19,
    move: PokemonMoves.fire.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    stats: {
      hp: 290,
      attack: 220,
      defense: 140,
      speed: 134,
    },
    types: [
      {
        name: "fire",
      },
    ],
    tier: "common",
  },
];

export const GroundBadgeTeam: ConcretePokemon[] = [
  {
    id: "nidoqueen-ground-gym",
    name: "nidoqueen",
    base_experience: 253,
    height: 13,
    move: PokemonMoves.poison.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    stats: {
      hp: 260,
      attack: 162,
      defense: 115,
      speed: 100,
    },
    types: [
      {
        name: "ground",
      },
      {
        name: "poison",
      },
    ],
    tier: "common",
  },
  {
    id: "donphan-ground-gym",
    name: "donphan",
    base_experience: 175,
    height: 11,
    move: PokemonMoves.ground.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    stats: {
      hp: 263,
      attack: 200,
      defense: 160,
      speed: 80,
    },
    types: [
      {
        name: "ground",
      },
    ],
    tier: "common",
  },
  {
    id: "flygon-ground-gym",
    name: "flygon",
    base_experience: 260,
    height: 20,
    move: PokemonMoves.ground.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    stats: {
      hp: 267,
      attack: 191,
      defense: 120,
      speed: 130,
    },
    types: [
      {
        name: "ground",
      },
      {
        name: "dragon",
      },
    ],
    tier: "common",
  },
  {
    id: "mamoswine-ground-gym",
    name: "mamoswine",
    base_experience: 265,
    height: 25,
    move: PokemonMoves.ice.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    stats: {
      hp: 315,
      attack: 231,
      defense: 110,
      speed: 130,
    },
    types: [
      {
        name: "ground",
      },
      {
        name: "ice",
      },
    ],
    tier: "common",
  },
  {
    id: "swampert-ground-gym",
    name: "swampert",
    base_experience: 268,
    height: 15,
    move: PokemonMoves.water.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    stats: {
      hp: 290,
      attack: 200,
      defense: 135,
      speed: 120,
    },
    types: [
      {
        name: "ground",
      },
      {
        name: "water",
      },
    ],
    tier: "common",
  },
  {
    id: "rhyperior-ground-gym",
    name: "rhyperior",
    base_experience: 268,
    height: 24,
    move: PokemonMoves.rock.extreme,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    stats: {
      hp: 325,
      attack: 245,
      defense: 200,
      speed: 80,
    },
    types: [
      {
        name: "ground",
      },
      {
        name: "rock",
      },
    ],
    tier: "common",
  },
];
