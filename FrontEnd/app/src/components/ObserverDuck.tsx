import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ObserverDuckProps {
    focusedInput: string;
    email: string; 
    password: string;
    show: boolean;
}

export const ObserverDuck = (props: ObserverDuckProps) => {
  const [duckImage, setDuckImage] = useState("patoCima.png");
  const initialRotation = 95;
  const [rotate, setRotate] = useState(initialRotation);

  useEffect(() => {
    switch (props.focusedInput) {
      case "null":
        setDuckImage("patoCima.png");
        break;
      case "login":
        setDuckImage("patoCima.png");
        if (props.email.length === 0) setRotate(95);
        else setRotate(initialRotation - 2 * props.email.length);
        break;
      case "password":
        if (props.password.length === 0) setRotate(95);
        else setRotate(initialRotation - 2 * props.password.length);
        break;
      default:
        if (props.show) setDuckImage("oneEyeClosed.png");
        else setDuckImage("bothEyesClosed.png");
        break;
    }
  }, [props.show, props.focusedInput, props.email, props.password]);

  return (
    <Image
      src={duckImage}
      w="200px"
      transform={`rotate(${rotate}deg)`}
      mb="-50px"
    />
  );
};
