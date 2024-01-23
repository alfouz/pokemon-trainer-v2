import BoulderBadge from "../assets/badges/Boulder_Badge.png";
import CascadeBadge from "../assets/badges/Cascade_Badge.png";
import EarthBadge from "../assets/badges/Earth_Badge.png";
import MarshBadge from "../assets/badges/Marsh_Badge.png";
import RainbowBadge from "../assets/badges/Rainbow_Badge.png";
import SoulBadge from "../assets/badges/Soul_Badge.png";
import ThunderBadge from "../assets/badges/Thunder_Badge.png";
import VolcanoBadge from "../assets/badges/Volcano_Badge.png";
import EliteFourBadge from "../assets/badges/Elite_Four.png";
import BlueBadge from "../assets/badges/Blue.png";
import RocketBadge from "../assets/badges/Rocket.png";
import RedBadge from "../assets/badges/Red.png";
import { OwnMedal } from "../types/utilTypes";
import {
  BlueTeam,
  ElectricBadgeTeam,
  EliteFourTeam,
  FireBadgeTeam,
  GrassBadgeTeam,
  GroundBadgeTeam,
  PoisonBadgeTeam,
  PsychicBadgeTeam,
  RedTeam,
  RockBadgeTeam,
  RocketTeam,
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
  { name: "EliteFour", image: EliteFourBadge, team: EliteFourTeam },
  { name: "Blue", image: BlueBadge, team: BlueTeam },
  { name: "Rocket", image: RocketBadge, team: RocketTeam },
  { name: "Red", image: RedBadge, team: RedTeam },
];

export default PokemonBadges;
