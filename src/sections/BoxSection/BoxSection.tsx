import PokemonBox from "../../components/PokemonBox/PokemonBox";
import PokemonTeam from "../../components/PokemonTeam/PokemonTeam";
import usePlayerState from "../../state/usePlayerState";
import { Container } from "./BoxSection.styles";

function BoxSection() {
  const { currentTeam, pokemons } = usePlayerState((s) => s);
  return (
    <Container>
      <PokemonTeam pokemons={currentTeam} /> <PokemonBox pokemons={pokemons} />
    </Container>
  );
}

export default BoxSection;
