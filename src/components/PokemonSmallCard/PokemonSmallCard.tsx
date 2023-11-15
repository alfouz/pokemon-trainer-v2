import { ConcretePokemon } from "../../types/ownTypes";
import { Container, StyledImage } from "./PokemonSmallCard.styles";
import NeutralImage from "../../assets/utils/neutralImage.png";

type Props = {
  pokemon: ConcretePokemon;
  onClick?: (pokemon: ConcretePokemon) => void;
};

const PokemonSmallCard = ({ pokemon, onClick }: Props) => {
  return (
    <Container onClick={() => onClick && onClick(pokemon)} tier={pokemon.tier}>
      <StyledImage src={pokemon.sprite || NeutralImage}></StyledImage>
    </Container>
  );
};

export default PokemonSmallCard;
