import { getMoveName } from "../../language/location";
import { OwnMove } from "../../types/utilTypes";
import { Container } from "./MoveBadge.styles";

type Props = {
  move: OwnMove;
};

const MoveBadge = ({ move }: Props) => {
  return <Container type={move.type}>{getMoveName(move.name)}</Container>;
};

export default MoveBadge;
