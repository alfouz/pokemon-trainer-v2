import {
  CloseButton,
  Container,
  ContentContainer,
  InnerContainer,
} from "./Modal.styles";

type Props = {
  children: React.ReactElement;
  onClose: () => void;
};

const GymBadge = ({ children, onClose }: Props) => {
  return (
    <Container>
      <InnerContainer>
        <CloseButton onClick={onClose}>Close</CloseButton>
        <ContentContainer>{children}</ContentContainer>
      </InnerContainer>
    </Container>
  );
};

export default GymBadge;
