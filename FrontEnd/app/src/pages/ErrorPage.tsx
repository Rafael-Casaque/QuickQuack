import { Flex, Text , Image} from "@chakra-ui/react";
import { useState } from "react";
import { ErrorMessage } from "../components/ErrorMessage";

export const ErrorPage = () => {
    return (
      <>
        <Flex
          style={{ perspective: "1000px" }}
          minH="100vh"
          w="100%"
          align="center"
          justify="center"
          bg="black"
        >
          <Flex
          style={{ perspective: "1000px" }}
          maxH="80vh"
          h="600px"
          maxW="80%"
          w="800px"
          align="center"
          justify="center"
          direction="column"
          backgroundImage="linear-gradient(to left top, #2a32e7, #0052f2, #006bf9, #0081fc, #2496fc, #4f98fc, #699afc, #7e9cfc, #9f89f5, #c171e4, #df52c8, #f423a2)"
          borderRadius="50px"
        >
          <ErrorMessage></ErrorMessage>
        </Flex>
        </Flex>
      </>
    );
  };
  