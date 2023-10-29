import MainSection from "../../sections/MainSection/MainSection";
import WildPokemonSection from "../../sections/WildPokemonSection/WildPokemonSection";
import { Container } from "./MainScreen.styles";

function MainScreen() {
  return (
    <Container>
      <WildPokemonSection></WildPokemonSection>
      <MainSection />
    </Container>
  );
}

export default MainScreen;
