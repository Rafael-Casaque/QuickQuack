import { Flex, Link, Text } from "@chakra-ui/react";

interface TrendingMessagesProps {
  trendingMessagesList: [string, string, string, string, string];
}

export const TrendingMessages = (props: TrendingMessagesProps) => {
  return (
    <Flex
      bg="black"
      h="100vh"
      position="fixed"
      w={{ base: "0", md: "250px", lg: "325px" }}
      display={{ base: "none", md: "flex", lg: "flex" }}
      right={{
        md: "0px",
        lg: "0px",
        xl: "auto",
      }}
      ml={{
        md: "0px",
        lg: "0px",
        xl: "975px",
      }}
      align="center"
      direction="column"
      justify="space-around"
    >
      <Flex
        bg="#272525"
        color="white"
        w="85%"
        direction="column"
        align="center"
        borderRadius="15px"
        p="10px"
        mt="20px"
      >
        <Text w="100%" textAlign="left" fontWeight="bold" fontSize="26px">
          Tendências
        </Text>
        <Text align="justify" my="5px" fontWeight="light">
          <Text fontWeight="bold" color="whiteAlpha.500" as="span">
            #1
          </Text>{" "}
          {props.trendingMessagesList[0]}
        </Text>
        <Text align="justify" my="5px" fontWeight="light">
          <Text fontWeight="bold" color="whiteAlpha.500" as="span">
            #2
          </Text>{" "}
          {props.trendingMessagesList[1]}
        </Text>
        <Text align="justify" my="5px" fontWeight="light">
          <Text fontWeight="bold" color="whiteAlpha.500" as="span">
            #3
          </Text>{" "}
          {props.trendingMessagesList[2]}
        </Text>
        <Text align="justify" my="5px" fontWeight="light">
          <Text fontWeight="bold" color="whiteAlpha.500" as="span">
            #4
          </Text>{" "}
          {props.trendingMessagesList[3]}
        </Text>
        <Text align="justify" my="5px" fontWeight="light">
          <Text fontWeight="bold" color="whiteAlpha.500" as="span">
            #5
          </Text>{" "}
          {props.trendingMessagesList[4]}
        </Text>
      </Flex>
      <Flex color="white" wrap="wrap" w="85%" justify="center">
        <Text mx="2px">Desenvolvido por Jatubeiros</Text>
        <Text mx="2px">&copy; 2023</Text>
        <Link mx="2px">Termos de Serviço</Link>
      </Flex>
    </Flex>
  );
};
