import { Avatar, Flex, Text } from "@chakra-ui/react";

interface CommentProps {
  author: string;
  avatar: string;
  content: string;
}

export const Comment = (props: CommentProps) => {
  return (
    <Flex direction="column" my="10px">
      <Flex>
        <Avatar w="40px" h="40px" src={props.avatar}/>
        <Flex direction="column" ml="10px" bg="#161616" borderRadius="10px" p="5px">
          <Text fontWeight="bold">{props.author}</Text>
          <Text align="justify">{props.content}</Text>
        </Flex>
      </Flex>
      <Flex align="center" ml="50px">
        <Text>Curtir</Text>
        <Text mx="15px">Responder</Text>
        <Text>2h</Text>
      </Flex>
    </Flex>
  );
};
