import { Avatar, Flex, Text } from "@chakra-ui/react";

interface CommentProps {
  author: string;
  avatar: string;
  content: string;
  createdAt: Date;
}

export const Comment = (props: CommentProps) => {
  return (
    <Flex direction="column" my="10px">
      <Flex>
        <Avatar w="40px" h="40px" name={props.author} src={props.avatar} />
        <Flex
          direction="column"
          ml="10px"
          bg="#161616"
          borderRadius="10px"
          p="5px"
        >
          <Text fontWeight="bold">{props.author}</Text>
          <Text align="justify">{props.content}</Text>
        </Flex>
      </Flex>
      <Flex align="center" ml="50px">
        <Text>Curtir</Text>
        <Text mx="15px">Responder</Text>
        <Text>
          {calculateTimeDifference(props.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export const calculateTimeDifference = (createdAt: Date): string => {
  const now = new Date(); // Obtém a data e hora atuais  

  const diffInMinutes = Math.floor((now.getTime() - createdAt.getTime()) / (1000 * 60)); // Calcula a diferença em minutos
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60); // Calcula a diferença em horas
  if (diffInHours < 24) {
    return `${diffInHours}h`;
  }

  const diffInDays = Math.floor(diffInHours / 24); // Calcula a diferença em dias
  return `${diffInDays}d`;
};