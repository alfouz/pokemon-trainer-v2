import { ConcretePokemon } from "../../types/ownTypes";
import { Container, StyledImage } from "./PokemonTeamCard.styles";
import NeutralImage from "../../assets/utils/neutralImage.png";

type Props = {
  pokemon: ConcretePokemon;
  onClick?: (pokemon: ConcretePokemon) => void;
};

const PokemonTeamCard = ({ pokemon, onClick }: Props) => {
  return (
    <Container onClick={() => onClick && onClick(pokemon)} tier={pokemon.tier}>
      <StyledImage src={pokemon.sprite || NeutralImage}></StyledImage>
    </Container>
  );
};

export default PokemonTeamCard;
