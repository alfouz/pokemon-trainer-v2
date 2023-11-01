import { ConcretePokemon } from "../../types/ownTypes";
import { Container } from "./PokemonTeam.styles";
import PokemonSmallCard from "../PokemonSmallCard/PokemonSmallCard";

type Props = {
  pokemons: ConcretePokemon[];
};

const PokemonTeam = ({ pokemons }: Props) => {
  return (
    <Container>
      {pokemons.map((p) => (
        <PokemonSmallCard pokemon={p} />
      ))}
    </Container>
  );
};

export default PokemonTeam;
