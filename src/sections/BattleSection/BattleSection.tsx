import GymBadge from "../../components/GymBadge/GymBadge";
import PokemonBadges from "../../consts/PokemonBadges";
import { Container, MedalContainer } from "./BattleSection.styles";

function BattleSection() {
  return (
    <Container>
      <MedalContainer>
        {PokemonBadges.map((pK) => (
          <GymBadge badge={pK} key={pK.name} />
        ))}
      </MedalContainer>
    </Container>
  );
}

export default BattleSection;
