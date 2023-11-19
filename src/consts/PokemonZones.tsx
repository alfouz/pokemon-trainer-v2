import CityImage from "../assets/zones/city.png";
import ClassicImage from "../assets/zones/classic.png";
import DessertImage from "../assets/zones/desert.png";
import FlowerImage from "../assets/zones/flower.png";
import GroceryImage from "../assets/zones/grocery.png";
import NightImage from "../assets/zones/night.png";
import OverskyImage from "../assets/zones/oversky.png";
import RanchImage from "../assets/zones/ranch.png";
import SeaImage from "../assets/zones/sea.png";
import SkyImage from "../assets/zones/sky.png";
import SnowImage from "../assets/zones/snow.png";
import SpaceImage from "../assets/zones/space.png";
import TheaterImage from "../assets/zones/theater.png";
import UndergroundImage from "../assets/zones/underground.png";
import UnderseaImage from "../assets/zones/undersea.png";
import UnknownImage from "../assets/zones/unknown.png";
import VolcanImage from "../assets/zones/volcan.png";
import { OwnZone, PokemonChance, PokemonZone } from "../types/utilTypes";

const PokemonZones: { [key in OwnZone]: PokemonZone } = {
  city: { name: "City", image: CityImage },
  classic: { name: "Classic", image: ClassicImage },
  dessert: { name: "Dessert", image: DessertImage },
  flower: { name: "Flower", image: FlowerImage },
  grocery: { name: "Grocery", image: GroceryImage },
  night: { name: "Night", image: NightImage },
  oversky: { name: "Oversky", image: OverskyImage },
  ranch: { name: "Ranch", image: RanchImage },
  sea: { name: "Sea", image: SeaImage },
  sky: { name: "Sky", image: SkyImage },
  snow: { name: "Snow", image: SnowImage },
  space: { name: "Space", image: SpaceImage },
  theater: { name: "Theater", image: TheaterImage },
  underground: { name: "Underground", image: UndergroundImage },
  undersea: { name: "Undersea", image: UnderseaImage },
  unknown: { name: "Unknwon", image: UnknownImage },
  volcan: { name: "Volcan", image: VolcanImage },
};

export const ZonesByProgress: OwnZone[][] = [
  ["ranch"], //Start
  ["underground", "dessert"], // Rock
  ["sea", "sky"], // Water
  ["night", "theater"], // Electric
  ["city", "flower"], // Plant
  ["oversky", "snow"], //Poisson
  ["grocery", "classic"], //Psiquic
  ["volcan", "undersea"], //Fire
  ["unknown", "space"], //Ground
];

export const PokemonHabitat: { [key in OwnZone]: PokemonChance[] } = {
  ranch: [
    { index: 1, chance: 5, name: "bulbasaur" },
    { index: 4, chance: 5, name: "charmander" },
    { index: 7, chance: 5, name: "squirtle" },
    { index: 10, chance: 40, name: "caterpie" },
    { index: 11, chance: 25, name: "metapod" },
    { index: 13, chance: 40, name: "weedle" },
    { index: 14, chance: 25, name: "kakuna" },
    { index: 16, chance: 30, name: "pidgey" },
    { index: 19, chance: 30, name: "rattata" },
    { index: 21, chance: 15, name: "spearow" },
    { index: 39, chance: 10, name: "jigglypuff" },
    { index: 52, chance: 10, name: "meowth" },
    { index: 129, chance: 50, name: "magikarp" },
    { index: 133, chance: 5, name: "eevee" },
    { index: 152, chance: 5, name: "chikorita" },
    { index: 155, chance: 5, name: "cyndaquil" },
    { index: 158, chance: 5, name: "totodile" },
    { index: 161, chance: 30, name: "sentret" },
    { index: 165, chance: 30, name: "ledyba" },
    { index: 167, chance: 30, name: "spinarak" },
    { index: 172, chance: 15, name: "pichu" },
    { index: 173, chance: 15, name: "cleffa" },
    { index: 174, chance: 15, name: "igglybuff" },
    { index: 175, chance: 15, name: "togepi" },
    { index: 179, chance: 10, name: "mareep" },
    { index: 187, chance: 10, name: "hoppip" },
    { index: 190, chance: 5, name: "aipom" },
    { index: 191, chance: 20, name: "sunkern" },
    { index: 252, chance: 5, name: "treecko" },
    { index: 255, chance: 5, name: "torchic" },
    { index: 258, chance: 5, name: "mudkip" },
    { index: 263, chance: 30, name: "zigzagoon" },
    { index: 265, chance: 40, name: "wurmple" },
    { index: 266, chance: 25, name: "silcoon" },
    { index: 268, chance: 25, name: "cascoon" },
    { index: 270, chance: 15, name: "lotad" },
    { index: 273, chance: 15, name: "seedot" },
    { index: 276, chance: 15, name: "taillow" },
    { index: 278, chance: 10, name: "wingull" },
    { index: 280, chance: 15, name: "ralts" },
    { index: 285, chance: 10, name: "shroomish" },
    { index: 287, chance: 5, name: "slakoth" },
    { index: 290, chance: 5, name: "nincada" },
    { index: 298, chance: 15, name: "azurill" },
    { index: 300, chance: 15, name: "skitty" },
    { index: 387, chance: 5, name: "turtwig" },
    { index: 390, chance: 5, name: "chimchar" },
    { index: 393, chance: 5, name: "piplup" },
    { index: 396, chance: 20, name: "starly" },
    { index: 399, chance: 30, name: "bidoof" },
    { index: 401, chance: 15, name: "kricketot" },
    { index: 403, chance: 5, name: "shinx" },
    { index: 406, chance: 10, name: "budew" },
    { index: 412, chance: 15, name: "burmy" },
    { index: 415, chance: 15, name: "combee" },
    { index: 420, chance: 15, name: "cherubi" },
    { index: 421, chance: 5, name: "buneary" },
    { index: 431, chance: 5, name: "glameow" },
    { index: 439, chance: 5, name: "mime-jr" },
    { index: 440, chance: 5, name: "happiny" },
  ],

  underground: [
    { index: 23, chance: 20, name: "ekans" },
    { index: 27, chance: 20, name: "sandshrew" },
    { index: 35, chance: 10, name: "clefairy" },
    { index: 41, chance: 50, name: "zubat" },
    { index: 43, chance: 15, name: "oddish" },
    { index: 46, chance: 15, name: "paras" },
    { index: 50, chance: 20, name: "diglett" },
    { index: 74, chance: 25, name: "geodude" },
    { index: 95, chance: 5, name: "onix" },
    { index: 201, chance: 3, name: "unown" },
    { index: 218, chance: 15, name: "slugma" },
    { index: 246, chance: 1, name: "larvitar" },
    { index: 293, chance: 15, name: "whismur" },
    { index: 304, chance: 10, name: "aron" },
    { index: 316, chance: 10, name: "gulpin" },
    { index: 408, chance: 5, name: "cranidos" },
    { index: 410, chance: 5, name: "shieldon" },
    { index: 438, chance: 10, name: "bonsly" },
    { index: 451, chance: 15, name: "skorupi" },
  ],
  dessert: [
    { index: 25, chance: 15, name: "pikachu" },
    { index: 29, chance: 25, name: "nidoran-f" },
    { index: 32, chance: 25, name: "nidoran-m" },
    { index: 37, chance: 10, name: "vulpix" },
    { index: 48, chance: 30, name: "venonat" },
    { index: 56, chance: 25, name: "mankey" },
    { index: 58, chance: 10, name: "growlithe" },
    { index: 66, chance: 10, name: "machop" },
    { index: 69, chance: 15, name: "bellsprout" },
    { index: 92, chance: 10, name: "gastly" },
    { index: 104, chance: 5, name: "cubone" },
    { index: 177, chance: 10, name: "natu" },
    { index: 220, chance: 10, name: "swinub" },
    { index: 236, chance: 10, name: "tyrogue" },
    { index: 238, chance: 10, name: "smoochum" },
    { index: 239, chance: 10, name: "elekid" },
    { index: 240, chance: 10, name: "magby" },
    { index: 261, chance: 30, name: "poochyena" },
    { index: 296, chance: 15, name: "makuhita" },
    { index: 307, chance: 15, name: "meditite" },
    { index: 309, chance: 15, name: "electrike" },
    { index: 322, chance: 15, name: "numel" },
    { index: 325, chance: 15, name: "spoink" },
    { index: 328, chance: 10, name: "trapinch" },
    { index: 331, chance: 25, name: "cacnea" },
    { index: 343, chance: 15, name: "baltoy" },
    { index: 345, chance: 5, name: "lileep" },
    { index: 347, chance: 5, name: "anorith" },
    { index: 371, chance: 2, name: "bagon" },
    { index: 374, chance: 2, name: "beldum" },
    { index: 433, chance: 25, name: "chingling" },
    { index: 434, chance: 20, name: "stunky" },
    { index: 443, chance: 2, name: "gible" },
    { index: 447, chance: 5, name: "riolu" },
    { index: 449, chance: 10, name: "hippopotas" },
    { index: 453, chance: 15, name: "croagunk" },
  ],

  sea: [
    { index: 54, chance: 20, name: "psyduck" },
    { index: 60, chance: 25, name: "poliwag" },
    { index: 61, chance: 15, name: "poliwhirl" },
    { index: 72, chance: 30, name: "tentacool" },
    { index: 79, chance: 20, name: "slowpoke" },
    { index: 86, chance: 15, name: "seel" },
    { index: 90, chance: 20, name: "shellder" },
    { index: 98, chance: 25, name: "krabby" },
    { index: 116, chance: 25, name: "horsea" },
    { index: 118, chance: 40, name: "goldeen" },
    { index: 120, chance: 15, name: "staryu" },
    { index: 138, chance: 5, name: "omanyte" },
    { index: 140, chance: 5, name: "kabuto" },
    { index: 147, chance: 2, name: "dratini" },
    { index: 170, chance: 25, name: "chinchou" },
    { index: 183, chance: 20, name: "marill" },
    { index: 194, chance: 15, name: "wooper" },
    { index: 222, chance: 15, name: "corsola" },
    { index: 223, chance: 35, name: "remoraid" },
    { index: 271, chance: 15, name: "lombre" },
    { index: 274, chance: 15, name: "nuzleaf" },
    { index: 283, chance: 35, name: "surskit" },
    { index: 284, chance: 20, name: "masquerain" },
    { index: 318, chance: 25, name: "carvanha" },
    { index: 320, chance: 20, name: "wailmer" },
    { index: 339, chance: 20, name: "barboach" },
    { index: 341, chance: 35, name: "corphish" },
    { index: 349, chance: 2, name: "feebas" },
    { index: 363, chance: 20, name: "spheal" },
    { index: 366, chance: 25, name: "clamperl" },
    { index: 370, chance: 15, name: "luvdisc" },
    { index: 418, chance: 15, name: "buizel" },
    { index: 422, chance: 15, name: "shellos" },
    { index: 456, chance: 35, name: "finneon" },
    { index: 458, chance: 25, name: "mantyke" },
  ],
  sky: [
    { index: 17, chance: 25, name: "pidgeotto" },
    { index: 22, chance: 10, name: "fearow" },
    { index: 81, chance: 25, name: "magnemite" },
    { index: 83, chance: 30, name: "farfetchd" },
    { index: 109, chance: 10, name: "koffing" },
    { index: 163, chance: 25, name: "hoothoot" },
    { index: 188, chance: 25, name: "skiploom" },
    { index: 277, chance: 5, name: "swellow" },
    { index: 279, chance: 5, name: "pelipper" },
    { index: 333, chance: 20, name: "swablu" },
    { index: 397, chance: 15, name: "staravia" },
    { index: 425, chance: 5, name: "drifloon" },
    { index: 436, chance: 20, name: "bronzor" },
    { index: 441, chance: 30, name: "chatot" },
  ],

  night: [
    { index: 30, chance: 10, name: "nidorina" },
    { index: 33, chance: 10, name: "nidorino" },
    { index: 42, chance: 10, name: "golbat" },
    { index: 44, chance: 10, name: "gloom" },
    { index: 70, chance: 10, name: "weepinbell" },
    { index: 88, chance: 10, name: "grimer" },
    { index: 93, chance: 10, name: "haunter" },
    { index: 96, chance: 10, name: "drowzee" },
    { index: 111, chance: 10, name: "rhyhorn" },
    { index: 193, chance: 10, name: "yanma" },
    { index: 198, chance: 10, name: "murkrow" },
    { index: 204, chance: 5, name: "pineco" },
    { index: 206, chance: 10, name: "dunsparce" },
    { index: 207, chance: 10, name: "gligar" },
    { index: 228, chance: 10, name: "houndour" },
    { index: 275, chance: 10, name: "shiftry" },
    { index: 302, chance: 10, name: "sableye" },
    { index: 305, chance: 10, name: "lairon" },
    { index: 329, chance: 10, name: "vibrava" },
    { index: 353, chance: 5, name: "shuppet" },
    { index: 355, chance: 5, name: "duskull" },
    { index: 360, chance: 10, name: "wynaut" },
    { index: 404, chance: 10, name: "luxio" },
  ],
  theater: [
    { index: 20, chance: 5, name: "raticate" },
    { index: 57, chance: 5, name: "primeape" },
    { index: 63, chance: 10, name: "abra" },
    { index: 64, chance: 10, name: "kadabra" },
    { index: 67, chance: 10, name: "machoke" },
    { index: 77, chance: 10, name: "ponyta" },
    { index: 84, chance: 5, name: "doduo" },
    { index: 100, chance: 5, name: "voltorb" },
    { index: 162, chance: 10, name: "furret" },
    { index: 213, chance: 10, name: "shuckle" },
    { index: 235, chance: 5, name: "smeargle" },
    { index: 262, chance: 10, name: "mightyena" },
    { index: 264, chance: 10, name: "linoone" },
    { index: 281, chance: 10, name: "kirlia" },
    { index: 288, chance: 5, name: "vigoroth" },
    { index: 294, chance: 10, name: "loudred" },
    { index: 299, chance: 10, name: "nosepass" },
    { index: 301, chance: 10, name: "delcatty" },
    { index: 311, chance: 10, name: "plusle" },
    { index: 312, chance: 10, name: "minun" },
    { index: 326, chance: 10, name: "grumpig" },
    { index: 327, chance: 10, name: "spinda" },
    { index: 400, chance: 10, name: "bibarel" },
    { index: 417, chance: 10, name: "pachirisu" },
    { index: 446, chance: 5, name: "munchlax" },
  ],

  city: [
    { index: 24, chance: 10, name: "arbok" },
    { index: 49, chance: 10, name: "venomoth" },
    { index: 82, chance: 5, name: "magneton" },
    { index: 89, chance: 10, name: "muk" },
    { index: 97, chance: 10, name: "hypno" },
    { index: 105, chance: 10, name: "marowak" },
    { index: 110, chance: 10, name: "weezing" },
    { index: 132, chance: 10, name: "ditto" },
    { index: 164, chance: 10, name: "noctowl" },
    { index: 168, chance: 10, name: "ariados" },
    { index: 171, chance: 10, name: "lanturn" },
    { index: 189, chance: 10, name: "jumpluff" },
    { index: 200, chance: 10, name: "misdreavus" },
    { index: 209, chance: 10, name: "snubbull" },
    { index: 229, chance: 10, name: "houndoom" },
    { index: 231, chance: 10, name: "phanpy" },
    { index: 292, chance: 10, name: "shedinja" },
    { index: 303, chance: 10, name: "mawile" },
    { index: 317, chance: 10, name: "swalot" },
    { index: 324, chance: 10, name: "torkoal" },
    { index: 335, chance: 10, name: "zangoose" },
    { index: 336, chance: 10, name: "seviper" },
    { index: 352, chance: 5, name: "kecleon" },
    { index: 356, chance: 5, name: "dusclops" },
    { index: 432, chance: 10, name: "purugly" },
    { index: 435, chance: 5, name: "skuntank" },
    { index: 442, chance: 5, name: "spiritomb" },
    { index: 452, chance: 10, name: "drapion" },
    { index: 455, chance: 10, name: "carnivine" },
  ],
  flower: [
    { index: 2, chance: 5, name: "ivysaur" },
    { index: 5, chance: 5, name: "charmeleon" },
    { index: 8, chance: 5, name: "wartortle" },
    { index: 12, chance: 5, name: "butterfree" },
    { index: 15, chance: 5, name: "beedrill" },
    { index: 47, chance: 5, name: "parasect" },
    { index: 102, chance: 5, name: "exeggcute" },
    { index: 114, chance: 5, name: "tangela" },
    { index: 119, chance: 10, name: "seaking" },
    { index: 123, chance: 10, name: "scyther" },
    { index: 127, chance: 10, name: "pinsir" },
    { index: 153, chance: 10, name: "bayleef" },
    { index: 156, chance: 10, name: "quilava" },
    { index: 159, chance: 10, name: "croconaw" },
    { index: 166, chance: 10, name: "ledian" },
    { index: 180, chance: 10, name: "flaaffy" },
    { index: 185, chance: 10, name: "sudowoodo" },
    { index: 192, chance: 10, name: "sunflora" },
    { index: 203, chance: 5, name: "girafarig" },
    { index: 205, chance: 5, name: "forretress" },
    { index: 212, chance: 5, name: "scizor" },
    { index: 214, chance: 5, name: "heracross" },
    { index: 216, chance: 5, name: "teddiursa" },
    { index: 234, chance: 5, name: "stantler" },
    { index: 241, chance: 5, name: "miltank" },
    { index: 253, chance: 5, name: "grovyle" },
    { index: 256, chance: 10, name: "combusken" },
    { index: 259, chance: 10, name: "marshtomp" },
    { index: 267, chance: 10, name: "beautifly" },
    { index: 269, chance: 10, name: "dustox" },
    { index: 271, chance: 10, name: "ludicolo" },
    { index: 286, chance: 10, name: "breloom" },
    { index: 291, chance: 10, name: "ninjask" },
    { index: 313, chance: 10, name: "volbeat" },
    { index: 314, chance: 10, name: "illumise" },
    { index: 315, chance: 10, name: "roselia" },
    { index: 357, chance: 10, name: "tropius" },
    { index: 388, chance: 10, name: "grotle" },
    { index: 391, chance: 10, name: "monferno" },
    { index: 394, chance: 10, name: "prinplup" },
    { index: 402, chance: 10, name: "kricketune" },
    { index: 413, chance: 10, name: "wormadam-plant" },
    { index: 414, chance: 10, name: "mothim" },
    { index: 416, chance: 10, name: "vespiquen" },
    { index: 421, chance: 10, name: "cherrim" },
    { index: 470, chance: 10, name: "leafeon" },
  ],

  oversky: [
    { index: 18, chance: 5, name: "pidgeot" },
    { index: 36, chance: 5, name: "clefable" },
    { index: 40, chance: 5, name: "wigglytuff" },
    { index: 113, chance: 5, name: "chansey" },
    { index: 148, chance: 5, name: "dragonair" },
    { index: 176, chance: 10, name: "togetic" },
    { index: 178, chance: 5, name: "xatu" },
    { index: 184, chance: 10, name: "azumarill" },
    { index: 227, chance: 10, name: "skarmory" },
    { index: 242, chance: 10, name: "blissey" },
    { index: 282, chance: 10, name: "gardevoir" },
    { index: 334, chance: 10, name: "altaria" },
    { index: 337, chance: 10, name: "lunatone" },
    { index: 338, chance: 10, name: "solrock" },
    { index: 344, chance: 10, name: "claydol" },
    { index: 358, chance: 10, name: "chimecho" },
    { index: 359, chance: 10, name: "absol" },
    { index: 398, chance: 10, name: "staraptor" },
    { index: 429, chance: 10, name: "mismagius" },
    { index: 437, chance: 5, name: "bronzong" },
    { index: 468, chance: 5, name: "togekiss" },
    { index: 475, chance: 10, name: "gallade" },
  ],
  snow: [
    { index: 28, chance: 10, name: "sandslash" },
    { index: 75, chance: 10, name: "graveler" },
    { index: 87, chance: 10, name: "dewgong" },
    { index: 91, chance: 10, name: "cloyster" },
    { index: 117, chance: 10, name: "seadra" },
    { index: 124, chance: 10, name: "jynx" },
    { index: 215, chance: 5, name: "sneasel" },
    { index: 221, chance: 5, name: "piloswine" },
    { index: 225, chance: 5, name: "delibird" },
    { index: 351, chance: 5, name: "castform" },
    { index: 361, chance: 5, name: "snorunt" },
    { index: 362, chance: 5, name: "glalie" },
    { index: 364, chance: 5, name: "sealeo" },
    { index: 375, chance: 5, name: "metang" },
    { index: 459, chance: 10, name: "snover" },
    { index: 460, chance: 10, name: "abomasnow" },
    { index: 461, chance: 10, name: "weavile" },
    { index: 471, chance: 10, name: "glaceon" },
    { index: 473, chance: 10, name: "mamoswine" },
    { index: 478, chance: 10, name: "froslass" },
  ],

  grocery: [
    { index: 26, chance: 10, name: "raichu" },
    { index: 38, chance: 10, name: "ninetales" },
    { index: 45, chance: 10, name: "vileplume" },
    { index: 53, chance: 10, name: "persian" },
    { index: 71, chance: 10, name: "victreebel" },
    { index: 85, chance: 5, name: "dodrio" },
    { index: 94, chance: 10, name: "gengar" },
    { index: 101, chance: 5, name: "electrode" },
    { index: 108, chance: 10, name: "lickitung" },
    { index: 122, chance: 10, name: "mr-mime" },
    { index: 125, chance: 10, name: "electabuzz" },
    { index: 135, chance: 10, name: "jolteon" },
    { index: 143, chance: 10, name: "snorlax" },
    { index: 181, chance: 10, name: "ampharos" },
    { index: 195, chance: 10, name: "quagsire" },
    { index: 196, chance: 10, name: "espeon" },
    { index: 210, chance: 10, name: "granbull" },
    { index: 217, chance: 5, name: "ursaring" },
    { index: 310, chance: 10, name: "manectric" },
    { index: 354, chance: 5, name: "banette" },
    { index: 405, chance: 10, name: "luxray" },
    { index: 426, chance: 10, name: "drifblim" },
    { index: 430, chance: 10, name: "honchkrow" },
    { index: 457, chance: 10, name: "lumineon" },
    { index: 462, chance: 10, name: "magnezone" },
    { index: 463, chance: 10, name: "lickilicky" },
    { index: 465, chance: 10, name: "tangrowth" },
    { index: 479, chance: 10, name: "rotom" },
  ],
  classic: [
    { index: 3, chance: 5, name: "venusaur" },
    { index: 31, chance: 10, name: "nidoqueen" },
    { index: 34, chance: 10, name: "nidoking" },
    { index: 51, chance: 10, name: "dugtrio" },
    { index: 55, chance: 10, name: "golduck" },
    { index: 68, chance: 10, name: "machamp" },
    { index: 78, chance: 10, name: "rapidash" },
    { index: 103, chance: 5, name: "exeggutor" },
    { index: 106, chance: 10, name: "hitmonlee" },
    { index: 107, chance: 10, name: "hitmonchan" },
    { index: 128, chance: 10, name: "tauros" },
    { index: 154, chance: 10, name: "meganium" },
    { index: 169, chance: 10, name: "crobat" },
    { index: 182, chance: 10, name: "bellossom" },
    { index: 186, chance: 10, name: "politoed" },
    { index: 197, chance: 10, name: "umbreon" },
    { index: 237, chance: 10, name: "hitmontop" },
    { index: 254, chance: 10, name: "sceptile" },
    { index: 295, chance: 10, name: "exploud" },
    { index: 297, chance: 10, name: "hariyama" },
    { index: 308, chance: 10, name: "medicham" },
    { index: 332, chance: 10, name: "cacturne" },
    { index: 389, chance: 10, name: "torterra" },
    { index: 407, chance: 10, name: "roserade" },
    { index: 419, chance: 5, name: "floatzel" },
    { index: 424, chance: 10, name: "ambipom" },
    { index: 428, chance: 10, name: "lopunny" },
    { index: 444, chance: 5, name: "gabite" },
    { index: 448, chance: 5, name: "lucario" },
    { index: 454, chance: 10, name: "toxicroak" },
    { index: 466, chance: 10, name: "electivire" },
    { index: 469, chance: 5, name: "yanmega" },
    { index: 472, chance: 10, name: "gliscor" },
    { index: 477, chance: 10, name: "dusknoir" },
  ],

  volcan: [
    { index: 6, chance: 5, name: "charizard" },
    { index: 59, chance: 5, name: "arcanine" },
    { index: 76, chance: 10, name: "golem" },
    { index: 112, chance: 10, name: "rhydon" },
    { index: 115, chance: 10, name: "kangaskhan" },
    { index: 126, chance: 10, name: "magmar" },
    { index: 136, chance: 10, name: "flareon" },
    { index: 142, chance: 10, name: "aerodactyl" },
    { index: 157, chance: 10, name: "typhlosion" },
    { index: 208, chance: 10, name: "steelix" },
    { index: 219, chance: 10, name: "magcargo" },
    { index: 232, chance: 10, name: "donphan" },
    { index: 247, chance: 5, name: "pupitar" },
    { index: 257, chance: 10, name: "blaziken" },
    { index: 306, chance: 10, name: "aggron" },
    { index: 323, chance: 10, name: "camerupt" },
    { index: 330, chance: 10, name: "flygon" },
    { index: 372, chance: 5, name: "shelgon" },
    { index: 392, chance: 10, name: "infernape" },
    { index: 409, chance: 10, name: "rampardos" },
    { index: 411, chance: 10, name: "bastiodon" },
    { index: 450, chance: 10, name: "hippowdon" },
    { index: 464, chance: 10, name: "rhyperior" },
    { index: 467, chance: 10, name: "magmortar" },
    { index: 476, chance: 10, name: "probopass" },
  ],
  undersea: [
    { index: 9, chance: 5, name: "blastoise" },
    { index: 62, chance: 10, name: "poliwrath" },
    { index: 73, chance: 10, name: "tentacruel" },
    { index: 80, chance: 10, name: "slowbro" },
    { index: 99, chance: 10, name: "kingler" },
    { index: 121, chance: 10, name: "starmie" },
    { index: 130, chance: 10, name: "gyarados" },
    { index: 131, chance: 10, name: "lapras" },
    { index: 134, chance: 10, name: "vaporeon" },
    { index: 139, chance: 10, name: "omastar" },
    { index: 141, chance: 10, name: "kabutops" },
    { index: 160, chance: 10, name: "feraligatr" },
    { index: 199, chance: 10, name: "slowking" },
    { index: 211, chance: 10, name: "qwilfish" },
    { index: 224, chance: 10, name: "octillery" },
    { index: 226, chance: 5, name: "mantine" },
    { index: 230, chance: 5, name: "kingdra" },
    { index: 260, chance: 5, name: "swampert" },
    { index: 319, chance: 10, name: "sharpedo" },
    { index: 321, chance: 10, name: "wailord" },
    { index: 340, chance: 10, name: "whiscash" },
    { index: 342, chance: 10, name: "crawdaunt" },
    { index: 346, chance: 10, name: "cradily" },
    { index: 348, chance: 10, name: "armaldo" },
    { index: 350, chance: 10, name: "milotic" },
    { index: 365, chance: 5, name: "walrein" },
    { index: 367, chance: 5, name: "huntail" },
    { index: 368, chance: 5, name: "gorebyss" },
    { index: 369, chance: 5, name: "relicanth" },
    { index: 395, chance: 10, name: "empoleon" },
    { index: 423, chance: 10, name: "gastrodon" },
  ],

  unknown: [
    { index: 65, chance: 5, name: "alakazam" },
    { index: 144, chance: 5, name: "articuno" },
    { index: 145, chance: 5, name: "zapdos" },
    { index: 146, chance: 5, name: "moltres" },
    { index: 149, chance: 5, name: "dragonite" },
    { index: 202, chance: 5, name: "wobbuffet" },
    { index: 233, chance: 5, name: "porygon2" },
    { index: 243, chance: 5, name: "raikou" },
    { index: 244, chance: 5, name: "entei" },
    { index: 245, chance: 5, name: "suicune" },
    { index: 248, chance: 5, name: "tyranitar" },
    { index: 249, chance: 5, name: "lugia" },
    { index: 250, chance: 5, name: "ho-oh" },
    { index: 289, chance: 5, name: "slaking" },
    { index: 373, chance: 5, name: "salamence" },
    { index: 376, chance: 5, name: "metagross" },
    { index: 377, chance: 5, name: "regirock" },
    { index: 378, chance: 5, name: "regice" },
    { index: 379, chance: 5, name: "registeel" },
    { index: 380, chance: 5, name: "latias" },
    { index: 381, chance: 5, name: "latios" },
    { index: 445, chance: 5, name: "garchomp" },
    { index: 474, chance: 10, name: "porygon-z" },
    { index: 480, chance: 10, name: "uxie" },
    { index: 481, chance: 10, name: "mesprit" },
    { index: 482, chance: 10, name: "azelf" },
    { index: 488, chance: 5, name: "cresselia" },
    { index: 489, chance: 5, name: "phione" },
    { index: 491, chance: 5, name: "darkrai" },
  ],
  space: [
    { index: 150, chance: 5, name: "mewtwo" },
    { index: 151, chance: 5, name: "mew" },
    { index: 251, chance: 5, name: "celebi" },
    { index: 382, chance: 5, name: "kyogre" },
    { index: 383, chance: 5, name: "groudon" },
    { index: 384, chance: 5, name: "rayquaza" },
    { index: 385, chance: 5, name: "jirachi" },
    { index: 386, chance: 5, name: "deoxys-normal" },
    { index: 483, chance: 5, name: "dialga" },
    { index: 484, chance: 5, name: "palkia" },
    { index: 485, chance: 5, name: "heatran" },
    { index: 486, chance: 5, name: "regigigas" },
    { index: 487, chance: 5, name: "giratina-altered" },
    { index: 490, chance: 5, name: "manaphy" },
    { index: 492, chance: 5, name: "shaymin-land" },
    { index: 493, chance: 5, name: "arceus" },
  ],
};

export default PokemonZones;
