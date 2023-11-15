import GymBadge from "../../components/GymBadge/GymBadge";
import PokemonBadges from "../../consts/PokemonBadges";
import useBattleState from "../../state/useBattleState";
import usePlayerState from "../../state/usePlayerState";
import { Container, MedalContainer, TitleCard } from "./MedalSection.styles";

function MedalSection() {
  const { startBattle } = useBattleState();
  const { currentTeam, setProgress, progress } = usePlayerState();

  const getBadge = (b: number) => () => {
    setProgress(b);
  };

  return (
    <Container>
      <TitleCard>Pokemon Trainer</TitleCard>
      <MedalContainer>
        {PokemonBadges.map((pK, index) => (
          <GymBadge
            badge={pK}
            key={pK.name}
            disabled={index > progress}
            onClick={() =>
              startBattle(currentTeam, pK.team, getBadge(index + 1))
            }
          />
        ))}
      </MedalContainer>
    </Container>
  );
}

export default MedalSection;
