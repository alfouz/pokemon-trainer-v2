import { useEffect, useState } from "react";
import { Container } from "./Notification.styles";

type Props = {
  text: string;
  onClose: () => void;
};

const Notification = ({ text, onClose }: Props) => {
  const [currentTimeout, setCurrentTimeout] = useState<number>();
  useEffect(() => {
    if (!currentTimeout) {
      const timeout = setTimeout(() => {
        onClose && onClose();
        setCurrentTimeout(undefined);
      }, 2000);
      setCurrentTimeout(timeout);
    }
  }, [text, onClose, currentTimeout]);

  return text !== "" ? <Container>{text}</Container> : <></>;
};

export default Notification;
