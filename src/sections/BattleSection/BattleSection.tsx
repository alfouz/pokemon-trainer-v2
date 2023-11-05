import BattleField from "../../components/BattleField/BattleField";
import useBattleState from "../../state/useBattleState";
import usePlayerState from "../../state/usePlayerState";
import { ButtonStyled, Container } from "./BattleSection.styles";

function BattleSection() {
  const { startBattle, battleStarted } = useBattleState();
  const { currentTeam, pokemons } = usePlayerState();

  const handleStartBattle = () => {
    startBattle(currentTeam, pokemons.slice(0, 2));
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
