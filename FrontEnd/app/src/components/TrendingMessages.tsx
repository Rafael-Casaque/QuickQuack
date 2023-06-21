import { Flex, Link, Text } from "@chakra-ui/react";

interface TrendingMessagesProps {
  trendingMessagesList: [string,string,string,string,string];
}

export const TrendingMessages = (props: TrendingMessagesProps) => {
  return (
    <Flex
      bg="black"
      minH="100vh"
      position="fixed"
      w="30%"
      right="0px"
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
        <Text mx="5px">Desenvolvido por Jatubeiros &copy; 2023</Text>
        <Link mx="5px">Termos de Serviço</Link>
      </Flex>
    </Flex>
  );
};
