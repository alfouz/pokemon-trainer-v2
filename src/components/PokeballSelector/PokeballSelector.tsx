import usePlayerState from "../../state/usePlayerState";
import { Container } from "./PokeballSelector.styles";
import PokemonBalls from "../../consts/PokemonBalls";
import PokeballButton from "../PokeballButton/PokeballButton";
import { OwnBall } from "../../types/utilTypes";

const PokeballSelector = () => {
  const { balls } = usePlayerState((s) => s.inventory);
  return (
    <Container>
      {Object.keys(PokemonBalls).map((b: string) => (
        <PokeballButton
          pokeball={PokemonBalls[b as OwnBall]}
          count={balls[PokemonBalls[b as OwnBall].index]}
        />
      ))}
    </Container>
  );
};

export default PokeballSelector;
