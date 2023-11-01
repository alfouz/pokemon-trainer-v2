import { OwnType } from "../types/ownTypes";
import { OwnMove, PowerTypes } from "../types/utilTypes";

const PokemonMoves: {
  [key: OwnType]: {
    [key in PowerTypes]: OwnMove;
  };
} = {
  normal: {
    low: {
      name: "tackle",
      id: "33",
      power: 40,
      type: "normal",
    },
    mid: {
      name: "slash",
      id: "163",
      power: 60,
      type: "normal",
    },
    strong: {
      name: "strength",
      id: "70",
      power: 80,
      type: "normal",
    },
    extreme: {
      name: "hyper-beam",
      id: "63",
      power: 100,
      type: "normal",
    },
  },
  flying: {
    low: {
      name: "wing-attack",
      id: "17",
      power: 40,
      type: "flying",
    },
    mid: {
      name: "air-cutter",
      id: "314",
      power: 60,
      type: "flying",
    },
    strong: {
      name: "drill-peck",
      id: "65",
      power: 80,
      type: "flying",
    },
    extreme: {
      name: "brave-bird",
      id: "413",
      power: 100,
      type: "flying",
    },
  },
  fighting: {
    low: {
      name: "jet-punch",
      id: "857",
      power: 40,
      type: "fighting",
    },
    mid: {
      name: "force-palm",
      id: "395",
      power: 60,
      type: "fighting",
    },
    strong: {
      name: "aura-sphere",
      id: "396",
      power: 80,
      type: "fighting",
    },
    extreme: {
      name: "close-combat",
      id: "370",
      power: 100,
      type: "fighting",
    },
  },
  poison: {
    low: {
      name: "acid",
      id: "51",
      power: 40,
      type: "poison",
    },
    mid: {
      name: "venoshock",
      id: "474",
      power: 60,
      type: "poison",
    },
    strong: {
      name: "poison-jab",
      id: "398",
      power: 80,
      type: "poison",
    },
    extreme: {
      name: "sludge-bomb",
      id: "188",
      power: 100,
      type: "poison",
    },
  },
  ground: {
    low: {
      name: "bulldoze",
      id: "523",
      power: 40,
      type: "ground",
    },
    mid: {
      name: "drill-run",
      id: "529",
      power: 60,
      type: "ground",
    },
    strong: {
      name: "earth-power",
      id: "414",
      power: 80,
      type: "ground",
    },
    extreme: {
      name: "earthquake",
      id: "89",
      power: 100,
      type: "ground",
    },
  },
  rock: {
    low: {
      name: "rock-throw",
      id: "88",
      power: 40,
      type: "rock",
    },
    mid: {
      name: "rock-slide",
      id: "157",
      power: 60,
      type: "rock",
    },
    strong: {
      name: "stone-edge",
      id: "444",
      power: 80,
      type: "rock",
    },
    extreme: {
      name: "rock-wrecker",
      id: "439",
      power: 100,
      type: "rock",
    },
  },
  bug: {
    low: {
      name: "twineedle",
      id: "41",
      power: 40,
      type: "bug",
    },
    mid: {
      name: "silver-wind",
      id: "318",
      power: 60,
      type: "bug",
    },
    strong: {
      name: "x-scissor",
      id: "404",
      power: 80,
      type: "bug",
    },
    extreme: {
      name: "megahorn",
      id: "224",
      power: 100,
      type: "bug",
    },
  },
  ghost: {
    low: {
      name: "shadow-sneak",
      id: "425",
      power: 40,
      type: "ghost",
    },
    mid: {
      name: "shadow-punch",
      id: "325",
      power: 60,
      type: "ghost",
    },
    strong: {
      name: "shadow-ball",
      id: "247",
      power: 80,
      type: "ghost",
    },
    extreme: {
      name: "shadow-force",
      id: "467",
      power: 100,
      type: "ghost",
    },
  },
  steel: {
    low: {
      name: "metal-claw",
      id: "232",
      power: 40,
      type: "steel",
    },
    mid: {
      name: "steel-wing",
      id: "211",
      power: 60,
      type: "steel",
    },
    strong: {
      name: "iron-tail",
      id: "231",
      power: 80,
      type: "steel",
    },
    extreme: {
      name: "steel-beam",
      id: "796",
      power: 100,
      type: "steel",
    },
  },
  fire: {
    low: {
      name: "ember",
      id: "52",
      power: 40,
      type: "fire",
    },
    mid: {
      name: "fire-punch",
      id: "7",
      power: 60,
      type: "fire",
    },
    strong: {
      name: "flamethrower",
      id: "53",
      power: 80,
      type: "fire",
    },
    extreme: {
      name: "fire-blast",
      id: "126",
      power: 100,
      type: "fire",
    },
  },
  water: {
    low: {
      name: "water-gun",
      id: "55",
      power: 40,
      type: "water",
    },
    mid: {
      name: "water-pulse",
      id: "352",
      power: 60,
      type: "water",
    },
    strong: {
      name: "scald",
      id: "503",
      power: 80,
      type: "water",
    },
    extreme: {
      name: "hydro-pump",
      id: "56",
      power: 100,
      type: "water",
    },
  },
  grass: {
    low: {
      name: "vine-whip",
      id: "22",
      power: 40,
      type: "grass",
    },
    mid: {
      name: "razor-leaf",
      id: "75",
      power: 60,
      type: "grass",
    },
    strong: {
      name: "leaf-blade",
      id: "348",
      power: 80,
      type: "grass",
    },
    extreme: {
      name: "solar-blade",
      id: "669",
      power: 100,
      type: "grass",
    },
  },
  electric: {
    low: {
      name: "thunder-shock",
      id: "84",
      power: 40,
      type: "electric",
    },
    mid: {
      name: "spark",
      id: "209",
      power: 60,
      type: "electric",
    },
    strong: {
      name: "thunderbolt",
      id: "85",
      power: 80,
      type: "electric",
    },
    extreme: {
      name: "thunder",
      id: "87",
      power: 100,
      type: "electric",
    },
  },
  psychic: {
    low: {
      name: "confusion",
      id: "93",
      power: 40,
      type: "psychic",
    },
    mid: {
      name: "psybeam",
      id: "60",
      power: 60,
      type: "psychic",
    },
    strong: {
      name: "psychic",
      id: "94",
      power: 80,
      type: "psychic",
    },
    extreme: {
      name: "psycho-boost",
      id: "354",
      power: 100,
      type: "psychic",
    },
  },
  ice: {
    low: {
      name: "powder-snow",
      id: "181",
      power: 40,
      type: "ice",
    },
    mid: {
      name: "aurora-beam",
      id: "62",
      power: 60,
      type: "ice",
    },
    strong: {
      name: "ice-beam",
      id: "58",
      power: 80,
      type: "ice",
    },
    extreme: {
      name: "blizzard",
      id: "59",
      power: 100,
      type: "ice",
    },
  },
  dragon: {
    low: {
      name: "twister",
      id: "239",
      power: 40,
      type: "dragon",
    },
    mid: {
      name: "dragon-breath",
      id: "225",
      power: 60,
      type: "dragon",
    },
    strong: {
      name: "dragon-claw",
      id: "337",
      power: 80,
      type: "dragon",
    },
    extreme: {
      name: "draco-meteor",
      id: "434",
      power: 100,
      type: "dragon",
    },
  },
  dark: {
    low: {
      name: "pursuit",
      id: "228",
      power: 40,
      type: "dark",
    },
    mid: {
      name: "feint-attack",
      id: "185",
      power: 60,
      type: "dark",
    },
    strong: {
      name: "dark-pulse",
      id: "399",
      power: 80,
      type: "dark",
    },
    extreme: {
      name: "foul-play",
      id: "492",
      power: 100,
      type: "dark",
    },
  },
  fairy: {
    low: {
      name: "fairy-wind",
      id: "584",
      power: 40,
      type: "fairy",
    },
    mid: {
      name: "dazzling-gleam",
      id: "605",
      power: 60,
      type: "fairy",
    },
    strong: {
      name: "play-rough",
      id: "583",
      power: 80,
      type: "fairy",
    },
    extreme: {
      name: "light-of-ruin",
      id: "617",
      power: 100,
      type: "fairy",
    },
  },
};

export default PokemonMoves;
