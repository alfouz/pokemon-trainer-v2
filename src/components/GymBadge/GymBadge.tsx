import { OwnMedal } from "../../types/utilTypes";
import { Container, StyledImage } from "./GymBadge.styles";

type Props = {
  badge: OwnMedal;
  onClick: () => void;
  disabled: boolean;
  achieved: boolean;
};

const GymBadge = ({ badge, onClick, disabled, achieved }: Props) => {
  return (
    <Container onClick={!disabled ? onClick : () => {}} disabled={disabled}>
      <StyledImage
        achieved={achieved}
        src={badge.image}
        disabled={disabled}
      ></StyledImage>
    </Container>
  );
};

export default GymBadge;
