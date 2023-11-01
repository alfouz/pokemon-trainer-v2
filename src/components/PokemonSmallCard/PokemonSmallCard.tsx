import { ConcretePokemon } from "../../types/ownTypes";
import { Container, StyledImage } from "./PokemonSmallCard.styles";
import NeutralImage from "../../assets/utils/neutralImage.png";

type Props = {
  pokemon: ConcretePokemon;
};

const PokemonSmallCard = ({ pokemon }: Props) => {
  return (
    <Container>
      <StyledImage src={pokemon.sprite || NeutralImage}></StyledImage>
    </Container>
  );
};

export default PokemonSmallCard;
