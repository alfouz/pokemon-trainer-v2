import BattleSection from "../BattleSection/BattleSection";
import BoxSection from "../BoxSection/BoxSection";
import MedalSection from "../MedalSection/MedalSection";
import { Container, InnerContainer } from "./ContentSection.styles";

function ContentSection() {
  return (
    <Container>
      <MedalSection />
      <InnerContainer>
        <BattleSection></BattleSection>
        <BoxSection></BoxSection>
      </InnerContainer>
    </Container>
  );
}

export default ContentSection;
