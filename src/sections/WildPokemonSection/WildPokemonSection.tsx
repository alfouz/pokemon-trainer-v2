import {
  BottomContainer,
  Container,
  SpriteContainer,
  ZonesContainer,
} from "./WildPokemonSection.styles";
import { useState } from "react";
import PokeButton from "../../components/PokeButton/PokeButton";
import useCurrentPokemon from "../../state/useCurrentPokemon";
import useCatchPokemon from "../../hooks/useCatchPokemon";
import WildPokemonCard from "../../components/WildPokemonCard/WildPokemonCard";
import PokeballSelector from "../../components/PokeballSelector/PokeballSelector";
import usePlayerState from "../../state/usePlayerState";
import { getRandomNumberRange } from "../../utils/genericUtils";
import PokemonBalls from "../../consts/PokemonBalls";
import PokemonZones, { ZonesByProgress } from "../../consts/PokemonZones";
import PokemonZone from "../../components/PokemonZone/PokemonZone";
import { OwnZone } from "../../types/utilTypes";
import Notification from "../../components/Notification/Notification";

function WildPokemonSection() {
  useCatchPokemon();
  const { removePokemon, currentPokemon } = useCurrentPokemon((s) => s);
  const { getBall, progress, currentZone, setCurrentZone } = usePlayerState(
    (s) => s
  );

  const getBallNow = () => {
    const ball = getRandomNumberRange(0, Object.keys(PokemonBalls).length);
    getBall(ball);
  };
  const [notificationText, setNotificationText] = useState("");

  const zones = ZonesByProgress.slice(0, progress + 1).flat();

  return (
    <Container>
      <SpriteContainer>
        {currentPokemon ? (
          <WildPokemonCard pokemon={currentPokemon} />
        ) : (
          <span>LOADING</span>
        )}
      </SpriteContainer>
      <PokeballSelector onCatch={(text: string) => setNotificationText(text)} />
      <BottomContainer>
        <PokeButton onClick={getBallNow}>Give me ball</PokeButton>
        <PokeButton onClick={removePokemon}>Give me other</PokeButton>
      </BottomContainer>
      <ZonesContainer>
        {zones.map((pZ) => (
          <PokemonZone
            zone={PokemonZones[pZ as OwnZone]}
            selected={pZ === currentZone}
            onClick={() => setCurrentZone(pZ)}
          />
        ))}
      </ZonesContainer>
      <Notification
        text={notificationText}
        onClose={() => setNotificationText("")}
      />
    </Container>
  );
}

export default WildPokemonSection;
