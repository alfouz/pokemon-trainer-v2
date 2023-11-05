import { OwnMedal } from "../../types/utilTypes";
import { Container, StyledImage } from "./GymBadge.styles";

type Props = {
  badge: OwnMedal;
  onClick: () => void;
};

const GymBadge = ({ badge, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <StyledImage src={badge.image}></StyledImage>
    </Container>
  );
};

export default GymBadge;
