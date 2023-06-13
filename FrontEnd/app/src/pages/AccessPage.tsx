import { Button, Flex } from "@chakra-ui/react";
import { Login } from "../components/Login";
import { Register } from "../components/Register";
import { useState } from "react";

export const AccessPage = () => {
  const [start, setStart] = useState(true);
  const [login, setLogin] = useState({ rotate: "", index: "1" });
  const [register, setRegister] = useState({
    rotate: "rotateY(-180deg)",
    index: "",
  });

  const changePage = () => {
    if (start) {
      setLogin({ rotate: "rotateY(180deg)", index: "0" });
      setRegister({ rotate: "rotateY(0)", index: "1" });
    } else {
      setLogin({ rotate: "", index: "1" });
      setRegister({ rotate: "rotateY(-180deg)", index: "" });
    }
    setStart(!start);
  };

  return (
    <>
        <Flex style={{ perspective: "1000px" }} h="70vh" w="70vw">
          <Login rotate={login.rotate} index={login.index} />
          <Register rotate={register.rotate} index={register.index} />      
        </Flex>
        <Button onClick={() => changePage()}>Mudar</Button>
    </>
  );
};
