import { useState } from "react";
import BattleField from "../../components/BattleField/BattleField";
import PokemonBalls from "../../consts/PokemonBalls";
import useBattleState from "../../state/useBattleState";
import usePlayerState from "../../state/usePlayerState";
import { getRandomNumberRange } from "../../utils/genericUtils";
import { ButtonStyled, Container } from "./BattleSection.styles";
import Notification from "../../components/Notification/Notification";

function BattleSection() {
  const { battleStarted, startRandomBattle } = useBattleState();
  const { currentTeam, currentZone, progress, getBall } = usePlayerState();
  const [notificationText, setNotificationText] = useState<string>("");

  const getRewardOnWin = () => {
    const quantity = getRandomNumberRange(1, progress > 1 ? progress : 2);
    for (let i = 0; i < quantity; i++) {
      const ball = getRandomNumberRange(1, Object.keys(PokemonBalls).length);
      getBall(ball);
    }
  };

  const handleStartBattle = () => {
    if (currentTeam.length > 0) {
      startRandomBattle(currentTeam, currentZone, getRewardOnWin);
    } else {
      setNotificationText("Please, add some pokemons to your team");
    }
  };

  return (
    <Container>
      {battleStarted ? (
        <BattleField />
      ) : (
        <ButtonStyled onClick={handleStartBattle}>Random Battle</ButtonStyled>
      )}
      <Notification
        text={notificationText}
        onClose={() => setNotificationText("")}
      />
    </Container>
  );
}

export default BattleSection;
