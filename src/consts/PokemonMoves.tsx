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
    },
    mid: {
      name: "slash",
      id: "163",
      power: 60,
    },
    strong: {
      name: "strength",
      id: "70",
      power: 80,
    },
    extreme: {
      name: "hyper-beam",
      id: "63",
      power: 100,
    },
  },
  fighting: {
    low: {
      name: "wing-attack",
      id: "17",
      power: 40,
    },
    mid: {
      name: "air-cutter",
      id: "314",
      power: 60,
    },
    strong: {
      name: "drill-peck",
      id: "65",
      power: 80,
    },
    extreme: {
      name: "brave-bird",
      id: "413",
      power: 100,
    },
  },
  flying: {
    low: {
      name: "jet-punch",
      id: "857",
      power: 40,
    },
    mid: {
      name: "force-palm",
      id: "395",
      power: 60,
    },
    strong: {
      name: "aura-sphere",
      id: "396",
      power: 80,
    },
    extreme: {
      name: "close-combat",
      id: "370",
      power: 100,
    },
  },
  poison: {
    low: {
      name: "acid",
      id: "51",
      power: 40,
    },
    mid: {
      name: "venoshock",
      id: "474",
      power: 60,
    },
    strong: {
      name: "poison-jab",
      id: "398",
      power: 80,
    },
    extreme: {
      name: "sludge-bomb",
      id: "188",
      power: 100,
    },
  },
  ground: {
    low: {
      name: "bulldoze",
      id: "523",
      power: 40,
    },
    mid: {
      name: "drill-run",
      id: "529",
      power: 60,
    },
    strong: {
      name: "earth-power",
      id: "414",
      power: 80,
    },
    extreme: {
      name: "earthquake",
      id: "89",
      power: 100,
    },
  },
  rock: {
    low: {
      name: "rock-throw",
      id: "88",
      power: 40,
    },
    mid: {
      name: "rock-slide",
      id: "157",
      power: 60,
    },
    strong: {
      name: "stone-edge",
      id: "444",
      power: 80,
    },
    extreme: {
      name: "rock-wrecker",
      id: "439",
      power: 100,
    },
  },
  bug: {
    low: {
      name: "twineedle",
      id: "41",
      power: 40,
    },
    mid: {
      name: "silver-wind",
      id: "318",
      power: 60,
    },
    strong: {
      name: "x-scissor",
      id: "404",
      power: 80,
    },
    extreme: {
      name: "megahorn",
      id: "224",
      power: 100,
    },
  },
  ghost: {
    low: {
      name: "shadow-sneak",
      id: "425",
      power: 40,
    },
    mid: {
      name: "shadow-punch",
      id: "325",
      power: 60,
    },
    strong: {
      name: "shadow-ball",
      id: "247",
      power: 80,
    },
    extreme: {
      name: "shadow-force",
      id: "467",
      power: 100,
    },
  },
  steel: {
    low: {
      name: "metal-claw",
      id: "232",
      power: 40,
    },
    mid: {
      name: "steel-wing",
      id: "211",
      power: 60,
    },
    strong: {
      name: "iron-tail",
      id: "231",
      power: 80,
    },
    extreme: {
      name: "steel-beam",
      id: "796",
      power: 100,
    },
  },
  fire: {
    low: {
      name: "ember",
      id: "52",
      power: 40,
    },
    mid: {
      name: "fire-punch",
      id: "7",
      power: 60,
    },
    strong: {
      name: "flamethrower",
      id: "53",
      power: 80,
    },
    extreme: {
      name: "fire-blast",
      id: "126",
      power: 100,
    },
  },
  water: {
    low: {
      name: "water-gun",
      id: "55",
      power: 40,
    },
    mid: {
      name: "water-pulse",
      id: "352",
      power: 60,
    },
    strong: {
      name: "scald",
      id: "503",
      power: 80,
    },
    extreme: {
      name: "hydro-pump",
      id: "56",
      power: 100,
    },
  },
  grass: {
    low: {
      name: "vine-whip",
      id: "22",
      power: 40,
    },
    mid: {
      name: "razor-leaf",
      id: "75",
      power: 60,
    },
    strong: {
      name: "leaf-blade",
      id: "348",
      power: 80,
    },
    extreme: {
      name: "solar-blade",
      id: "669",
      power: 100,
    },
  },
  electric: {
    low: {
      name: "thunder-shock",
      id: "84",
      power: 40,
    },
    mid: {
      name: "spark",
      id: "209",
      power: 60,
    },
    strong: {
      name: "thunderbolt",
      id: "85",
      power: 80,
    },
    extreme: {
      name: "thunder",
      id: "87",
      power: 100,
    },
  },
  psychic: {
    low: {
      name: "confusion",
      id: "93",
      power: 40,
    },
    mid: {
      name: "psybeam",
      id: "60",
      power: 60,
    },
    strong: {
      name: "psychic",
      id: "94",
      power: 80,
    },
    extreme: {
      name: "psycho-boost",
      id: "354",
      power: 100,
    },
  },
  ice: {
    low: {
      name: "powder-snow",
      id: "181",
      power: 40,
    },
    mid: {
      name: "aurora-beam",
      id: "62",
      power: 60,
    },
    strong: {
      name: "ice-beam",
      id: "58",
      power: 80,
    },
    extreme: {
      name: "blizzard",
      id: "59",
      power: 100,
    },
  },
  dragon: {
    low: {
      name: "twister",
      id: "239",
      power: 40,
    },
    mid: {
      name: "dragon-breath",
      id: "225",
      power: 60,
    },
    strong: {
      name: "dragon-claw",
      id: "337",
      power: 80,
    },
    extreme: {
      name: "draco-meteor",
      id: "434",
      power: 100,
    },
  },
  dark: {
    low: {
      name: "pursuit",
      id: "228",
      power: 40,
    },
    mid: {
      name: "feint-attack",
      id: "185",
      power: 60,
    },
    strong: {
      name: "dark-pulse",
      id: "399",
      power: 80,
    },
    extreme: {
      name: "foul-play",
      id: "492",
      power: 100,
    },
  },
  fairy: {
    low: {
      name: "fairy-wind",
      id: "584",
      power: 40,
    },
    mid: {
      name: "dazzling-gleam",
      id: "605",
      power: 60,
    },
    strong: {
      name: "play-rough",
      id: "583",
      power: 80,
    },
    extreme: {
      name: "light-of-ruin",
      id: "617",
      power: 100,
    },
  },
};

export default PokemonMoves;
