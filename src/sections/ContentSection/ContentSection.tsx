import GymBadge from "../../components/GymBadge/GymBadge";
import PokemonBadges from "../../consts/PokemonBadges";
import BattleSection from "../BattleSection/BattleSection";
import BoxSection from "../BoxSection/BoxSection";
import {
  Container,
  InnerContainer,
  MedalContainer,
} from "./ContentSection.styles";

function ContentSection() {
  return (
    <Container>
      <MedalContainer>
        {PokemonBadges.map((pK) => (
          <GymBadge badge={pK} key={pK.name} />
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
