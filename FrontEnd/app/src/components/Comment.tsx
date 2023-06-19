import { Avatar, Flex, Text } from "@chakra-ui/react";

export const Comment = () => {
  return (
    <Flex>
      <Avatar />
      <Flex>
        <Text></Text>
        <Text></Text>
      </Flex>
      <Flex>
        <Text>Curtir</Text>
        <Text>Responder</Text>
        <Text>2h</Text>
      </Flex>
    </Flex>
  );
};
