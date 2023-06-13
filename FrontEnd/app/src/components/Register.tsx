import { Flex, Text } from "@chakra-ui/react";

interface RegisterProps {
  rotate: string;
  index: string;
}

export const Register = (props: RegisterProps) => {
  return (
    <Flex
      bg="tomato"
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
      //   transform="rotateY(-180deg)"
      style={{ backfaceVisibility: "hidden" }}
      transform={props.rotate}
      zIndex={props.index}
    >
      <Text fontWeight="bold">Register</Text>
    </Flex>
  );
};
