import { OwnMedal } from "../../types/utilTypes";
import { Container, StyledImage } from "./GymBadge.styles";

type Props = {
  badge: OwnMedal;
};

const GymBadge = ({ badge }: Props) => {
  return (
    <Container>
      <StyledImage src={badge.image}></StyledImage>
    </Container>
  );
};

export default GymBadge;
