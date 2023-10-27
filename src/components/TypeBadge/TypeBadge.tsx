import { OwnType } from "../../types/ownTypes";
import { Container } from "./TypeBadge.styles";

type Props = {
  type: OwnType;
};
const TypeBadge = ({ type }: Props) => {
  return <Container type={type}>{type}</Container>;
};
export default TypeBadge;
