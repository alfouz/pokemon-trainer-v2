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
import PokemonZones, { ZonesByProgress } from "../../consts/PokemonZones";
import PokemonZone from "../../components/PokemonZone/PokemonZone";
import { OwnZone } from "../../types/utilTypes";
import Notification from "../../components/Notification/Notification";
import PokeballLoader from "../../components/PokeballLoader/PokeballLoader";

function WildPokemonSection() {
  useCatchPokemon();
  const { removePokemon, currentPokemon } = useCurrentPokemon((s) => s);
  const { progress, currentZone, setCurrentZone } = usePlayerState((s) => s);

  const [notificationText, setNotificationText] = useState("");

  const zones = ZonesByProgress.slice(0, progress + 1).flat();

  return (
    <Container>
      <SpriteContainer>
        {currentPokemon ? (
          <WildPokemonCard pokemon={currentPokemon} />
        ) : (
          <PokeballLoader />
        )}
      </SpriteContainer>
      <PokeballSelector onCatch={(text: string) => setNotificationText(text)} />
      <BottomContainer>
        {/* <PokeButton onClick={getBallNow}>Give me ball</PokeButton> */}
        <PokeButton onClick={removePokemon}>Run</PokeButton>
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
