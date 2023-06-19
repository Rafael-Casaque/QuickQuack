import { Flex, Text } from "@chakra-ui/react";

export const CommentBox = () => {
  return (
    <Flex w="100%" justify="center" borderRadius="15px" bg="blackAlpha.200">
        <Flex          
          w="95%"
          h="250px"          
          p="10px"
          direction="column"
          overflow="auto"
          css={{        
            "&::-webkit-scrollbar": {
              width: "10px",                              
            },
            "&::-webkit-scrollbar-track": {
              background: "#F1F1F1",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        >
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
          <Text color="white">teste</Text>
        </Flex>
    </Flex>
  );
};
