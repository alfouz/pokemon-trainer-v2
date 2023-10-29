import Footer from "../../components/Footer/Footer";
import BattleSection from "../BattleSection/BattleSection";
import { Container } from "./MainSection.styles";

function MainSection() {
  return (
    <Container>
      <BattleSection></BattleSection>
      <Footer />
    </Container>
  );
}

export default MainSection;
