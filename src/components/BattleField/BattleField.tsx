import useBattleState from "../../state/useBattleState";
import DetailsPokemonCard from "../DetailsPokemonCard/DetailsPokemonCard";
import PokeButton from "../PokeButton/PokeButton";
import {
  CenterContainer,
  Container,
  InnerContainer,
  LeftContainer,
  RightContainer,
} from "./BattleField.styles";

const BattleField = () => {
  const { enemyTeam, currentTeam, cleanTeams } = useBattleState();

  return (
    <Container>
      <InnerContainer>
        <LeftContainer>
          <DetailsPokemonCard pokemon={currentTeam[0]} />
        </LeftContainer>
        <CenterContainer>
          Battle
          <PokeButton onClick={cleanTeams}>Forfeit</PokeButton>
        </CenterContainer>
        <RightContainer>
          <DetailsPokemonCard pokemon={enemyTeam[0]} />
        </RightContainer>
      </InnerContainer>
    </Container>
  );
};

export default BattleField;
