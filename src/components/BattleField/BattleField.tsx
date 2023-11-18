import useBattlingPokemon from "../../hooks/useBattlingPokemon";
import useBattleState from "../../state/useBattleState";
import DetailsPokemonCard from "../DetailsPokemonCard/DetailsPokemonCard";
import LifeBar from "../LifeBar/LifeBar";
import PokeButton from "../PokeButton/PokeButton";
import {
  CenterContainer,
  Container,
  InnerContainer,
  LeftContainer,
  RightContainer,
} from "./BattleField.styles";

const getBattleText = (value: number) => {
  if (value === 0) return "Battle";
  if (value < 0) return "You loose";
  if (value > 0) return "You win";
};

const BattleField = () => {
  const { cleanTeams, currentPokemon, enemyPokemon, hasWon, onFinishBattle } =
    useBattleState();
  const { cleanBattle } = useBattlingPokemon();

  const handleForfeit = () => {
    cleanBattle();
    cleanTeams();
  };

  const handleWin = () => {
    handleForfeit();
    onFinishBattle && onFinishBattle();
  };

  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          {currentPokemon && (
            <>
              <DetailsPokemonCard pokemon={currentPokemon} showTier={false} />
              <LifeBar
                current={currentPokemon?.life}
                total={currentPokemon?.stats.hp}
              />
            </>
          )}
        </LeftContainer>
        <CenterContainer>
          <span>{getBattleText(hasWon)}</span>
          <PokeButton onClick={hasWon ? handleWin : handleForfeit}>
            {!hasWon ? "Forfeit" : "Exit"}
          </PokeButton>
        </CenterContainer>
        <RightContainer>
          {enemyPokemon && (
            <>
              <DetailsPokemonCard pokemon={enemyPokemon} showTier={false} />
              <LifeBar
                current={enemyPokemon?.life}
                total={enemyPokemon?.stats.hp}
              />
            </>
          )}
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default BattleField;
