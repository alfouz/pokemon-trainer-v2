import GymBadge from "../../components/GymBadge/GymBadge";
import PokemonBadges from "../../consts/PokemonBadges";
import useBattleState from "../../state/useBattleState";
import usePlayerState from "../../state/usePlayerState";
import BattleSection from "../BattleSection/BattleSection";
import BoxSection from "../BoxSection/BoxSection";
import {
  Container,
  InnerContainer,
  MedalContainer,
} from "./ContentSection.styles";

function ContentSection() {
  const { startBattle } = useBattleState();
  const { currentTeam } = usePlayerState();

  return (
    <Container>
      <MedalContainer>
        {PokemonBadges.map((pK) => (
          <GymBadge
            badge={pK}
            key={pK.name}
            onClick={() => startBattle(currentTeam, pK.team)}
          />
        ))}
      </MedalContainer>
      <InnerContainer>
        <BattleSection></BattleSection>
        <BoxSection></BoxSection>
      </InnerContainer>
    </Container>
  );
}

export default ContentSection;
