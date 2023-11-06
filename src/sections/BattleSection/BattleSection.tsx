import BattleField from "../../components/BattleField/BattleField";
import useBattleState from "../../state/useBattleState";
import usePlayerState from "../../state/usePlayerState";
import { ButtonStyled, Container } from "./BattleSection.styles";

function BattleSection() {
  const { battleStarted, startRandomBattle } = useBattleState();
  const {
    currentTeam,
    options: { maxPokemonId },
  } = usePlayerState();

  const handleStartBattle = () => {
    startRandomBattle(currentTeam, maxPokemonId);
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
