import Pokeball from "../assets/pokeballs/PokeBall.png";
import Superball from "../assets/pokeballs/Superball.png";
import Ultraball from "../assets/pokeballs/Ultraball.png";
import Masterball from "../assets/pokeballs/Masterball.png";
import { OwnBall, OwnPokeball } from "../types/utilTypes";

const PokemonBalls: { [key in OwnBall]: OwnPokeball } = {
  pokeball: {
    name: "Pokeball",
    image: Pokeball,
    type: "pokeball",
    chance: 20,
    index: 0,
  },
  superball: {
    name: "Superball",
    image: Superball,
    type: "superball",
    chance: 40,
    index: 1,
  },
  ultraball: {
    name: "Ultraball",
    image: Ultraball,
    type: "ultraball",
    chance: 70,
    index: 2,
  },
  masterball: {
    name: "Masterball",
    image: Masterball,
    type: "masterball",
    chance: 100,
    index: 3,
  },
};

export default PokemonBalls;
