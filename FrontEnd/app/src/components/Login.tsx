import { Flex, Text } from "@chakra-ui/react";

interface LoginProps {
    rotate: string;
    index: string;
}

export const Login = (props:LoginProps) => {
  return (
    <Flex
      bg="teal.400"
      h="50vh"
      w="50vw"
      align="center"
      justify="center"
      position="absolute"
      width="100%"
      height="100%"
      padding="10px"
      border-radius="10px"
      transition="700ms"
      transform={props.rotate}
      zIndex={props.index}
    >
      <Text fontWeight="bold">Login</Text>
    </Flex>
  );
};
