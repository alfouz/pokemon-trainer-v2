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

const BattleField = () => {
  const { cleanTeams, currentPokemon, enemyPokemon } = useBattleState();
  const { cleanBattle } = useBattlingPokemon();

  const handleForfeit = () => {
    cleanBattle();
    cleanTeams();
  };

  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          {currentPokemon && (
            <>
              <DetailsPokemonCard pokemon={currentPokemon} />
              <LifeBar
                current={currentPokemon?.life}
                total={currentPokemon?.stats.hp}
              />
            </>
          )}
        </LeftContainer>
        <CenterContainer>
          Battle
          <PokeButton onClick={handleForfeit}>Forfeit</PokeButton>
        </CenterContainer>
        <RightContainer>
          {enemyPokemon && (
            <>
              <DetailsPokemonCard pokemon={enemyPokemon} />
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
