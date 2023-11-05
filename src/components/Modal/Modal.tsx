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

const Modal = ({ children, onClose }: Props) => {
  return (
    <Container>
      <InnerContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ContentContainer>{children}</ContentContainer>
      </InnerContainer>
    </Container>
  );
};

export default Modal;
