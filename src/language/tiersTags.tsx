import { OwnTiers } from "../types/utilTypes";

const tierTags: { [key in OwnTiers]: string } = {
  common: "Common",
  rare: "Rare",
  veryrare: "Very Rare",
  legendary: "Legendary",
  mythic: "Mythic",
  final: "Final",
};

export default tierTags;
