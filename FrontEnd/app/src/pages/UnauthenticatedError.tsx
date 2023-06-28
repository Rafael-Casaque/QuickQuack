import { Flex, Button } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const UnauthenticatedError = () => {
  const redirect = useNavigate();

  return (
    <>
      <Flex minH="100vh" w="100%" align="left" bg="black" direction="column">
        <Heading
          as="h1"
          fontSize="7xl"
          noOfLines={1}
          bgGradient="linear-gradient(to left top, #2a32e7, #0052f2, #006bf9, #0081fc, #2496fc, #4f98fc, #699afc, #7e9cfc, #9f89f5, #c171e4, #df52c8, #f423a2)"
          bgClip="text"
          margin="0.5em"
          paddingLeft="0.5em"
        >
          {" "}
          Ops!{" "}
        </Heading>

        <Heading
          as="h3"
          fontSize="5xl"
          noOfLines={5}
          bgClip="text"
          color="white"
          margin="0.5em"
          paddingLeft="1em"
        >
          {" "}
          Parece que seu login expirou...{" "}
        </Heading>

        <Heading
          as="h3"
          fontSize="5xl"
          noOfLines={7}
          bgClip="text"
          color="white"
          margin="0.5em"
          paddingLeft="1em"
        >
          {" "}
          Retorne à página inicial para realizar seu login novamente.{" "}
        </Heading>

        <Button
          variant="link"
          alignSelf="center"
          color="white"
          size="xl"
          bgGradient="linear-gradient(to left top, #2a32e7, #0052f2, #006bf9, #0081fc, #2496fc, #4f98fc, #699afc, #7e9cfc, #9f89f5, #c171e4, #df52c8, #f423a2)"
          mt="45px"
          fontSize="3xl"
          p="20px 35px"
          onClick={() => {
            redirect("/login");
          }}
          _hover={{
            transform: "scale(1.05)",
          }}
        >
          Voltar para o Login
        </Button>
      </Flex>
    </>
  );
};
