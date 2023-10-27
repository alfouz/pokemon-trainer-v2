import { Container } from "./PokeButton.styles";

type Props = {
  children: string;
  onClick: () => void;
};
const PokeButton = ({ children, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <span>{children}</span>
    </Container>
  );
};

export default PokeButton;
