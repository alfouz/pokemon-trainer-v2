import BoulderBadge from "../assets/badges/Boulder_Badge.png";
import CascadeBadge from "../assets/badges/Cascade_Badge.png";
import EarthBadge from "../assets/badges/Earth_Badge.png";
import MarshBadge from "../assets/badges/Marsh_Badge.png";
import RainbowBadge from "../assets/badges/Rainbow_Badge.png";
import SoulBadge from "../assets/badges/Soul_Badge.png";
import ThunderBadge from "../assets/badges/Thunder_Badge.png";
import VolcanoBadge from "../assets/badges/Volcano_Badge.png";
import { OwnMedal } from "../types/utilTypes";

const PokemonBadges: OwnMedal[] = [
  { name: "Rock", image: BoulderBadge },
  { name: "Cascade", image: CascadeBadge },
  { name: "Thunder", image: ThunderBadge },
  { name: "Rainbow", image: RainbowBadge },
  { name: "Soul", image: SoulBadge },
  { name: "Marsh", image: MarshBadge },
  { name: "Volcano", image: VolcanoBadge },
  { name: "Earth", image: EarthBadge },
];

export default PokemonBadges;
