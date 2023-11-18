import BoulderBadge from "../assets/badges/Boulder_Badge.png";
import CascadeBadge from "../assets/badges/Cascade_Badge.png";
import EarthBadge from "../assets/badges/Earth_Badge.png";
import MarshBadge from "../assets/badges/Marsh_Badge.png";
import RainbowBadge from "../assets/badges/Rainbow_Badge.png";
import SoulBadge from "../assets/badges/Soul_Badge.png";
import ThunderBadge from "../assets/badges/Thunder_Badge.png";
import VolcanoBadge from "../assets/badges/Volcano_Badge.png";
import { OwnMedal } from "../types/utilTypes";
import {
  ElectricBadgeTeam,
  FireBadgeTeam,
  GrassBadgeTeam,
  GroundBadgeTeam,
  PoisonBadgeTeam,
  PsychicBadgeTeam,
  RockBadgeTeam,
  WaterBadgeTeam,
} from "./PokemonTeams";

const PokemonBadges: OwnMedal[] = [
  { name: "Rock", image: BoulderBadge, team: RockBadgeTeam },
  { name: "Cascade", image: CascadeBadge, team: WaterBadgeTeam },
  { name: "Thunder", image: ThunderBadge, team: ElectricBadgeTeam },
  { name: "Rainbow", image: RainbowBadge, team: GrassBadgeTeam },
  { name: "Soul", image: SoulBadge, team: PoisonBadgeTeam },
  { name: "Marsh", image: MarshBadge, team: PsychicBadgeTeam },
  { name: "Volcano", image: VolcanoBadge, team: FireBadgeTeam },
  { name: "Earth", image: EarthBadge, team: GroundBadgeTeam },
];

export default PokemonBadges;
