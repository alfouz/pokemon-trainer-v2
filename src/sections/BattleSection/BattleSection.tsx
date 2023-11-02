import BattleField from "../../components/BattleField/BattleField";
import useBattleState from "../../state/useBattleState";
import usePlayerState from "../../state/usePlayerState";
import { ButtonStyled, Container } from "./BattleSection.styles";

function BattleSection() {
  const {
    enemyTeam,
    currentTeam: currentBattleTeam,
    setCurrentTeam,
    setEnemyTeam,
  } = useBattleState();
  const { currentTeam } = usePlayerState();

  const startBattle = () => {
    setCurrentTeam(currentTeam);
    setEnemyTeam(currentTeam);
  };

  const hasBattle = enemyTeam.length > 0 && currentBattleTeam.length > 0;

  return (
    <Container>
      {hasBattle ? (
        <BattleField />
      ) : (
        <ButtonStyled onClick={startBattle}>Random Battle</ButtonStyled>
      )}
    </Container>
  );
}

export default BattleSection;
