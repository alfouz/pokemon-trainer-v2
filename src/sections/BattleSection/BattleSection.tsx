import BattleField from "../../components/BattleField/BattleField";
import PokemonBalls from "../../consts/PokemonBalls";
import useBattleState from "../../state/useBattleState";
import usePlayerState from "../../state/usePlayerState";
import { getRandomNumberRange } from "../../utils/genericUtils";
import { ButtonStyled, Container } from "./BattleSection.styles";

function BattleSection() {
  const { battleStarted, startRandomBattle } = useBattleState();
  const { currentTeam, currentZone, progress, getBall } = usePlayerState();

  const getRewardOnWin = () => {
    const quantity = getRandomNumberRange(1, progress > 1 ? progress : 2);
    for (let i = 0; i < quantity; i++) {
      const ball = getRandomNumberRange(1, Object.keys(PokemonBalls).length);
      getBall(ball);
    }
  };

  const handleStartBattle = () => {
    startRandomBattle(currentTeam, currentZone, getRewardOnWin);
  };

  return (
    <Container>
      {battleStarted ? (
        <BattleField />
      ) : (
        <ButtonStyled onClick={handleStartBattle}>Random Battle</ButtonStyled>
      )}
    </Container>
  );
}

export default BattleSection;
