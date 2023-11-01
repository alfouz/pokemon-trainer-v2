import { ConcretePokemon } from "../../types/ownTypes";
import { Container } from "./PokemonBox.styles";
import PokemonSmallCard from "../PokemonSmallCard/PokemonSmallCard";

type Props = {
  pokemons: ConcretePokemon[];
};

const PokemonBox = ({ pokemons }: Props) => {
  return (
    <Container>
      {pokemons.map((p) => (
        <PokemonSmallCard pokemon={p} />
      ))}
    </Container>
  );
};

export default PokemonBox;
