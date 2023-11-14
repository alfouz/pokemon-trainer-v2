import { useEffect } from "react";
import { Container } from "./Notification.styles";

type Props = {
  text: string;
  onClose: () => void;
};

const Notification = ({ text, onClose }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      onClose && onClose();
    }, 2000);
  }, [text, onClose]);

  return text !== "" ? <Container>{text}</Container> : <></>;
};

export default Notification;
