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
import { OwnZone, PokemonZone } from "../types/utilTypes";

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
  ["sea"], // Water
  ["night", "theater"], // Electric
  ["city", "flower"], // Plant
  ["sky", "snow"], //Poisson
  ["grocery", "classic"], //Psiquic
  ["volcan", "undersea"], //Fire
  ["unknown", "space"], //Ground
];

export default PokemonZones;
