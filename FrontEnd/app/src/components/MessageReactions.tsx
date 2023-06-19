import { Flex, Text } from "@chakra-ui/react";
import { LikeIcon } from "../icons/LikeIcon";
import { CommentIcon } from "../icons/CommentIcon";
import { ShareIcon } from "../icons/ShareIcon";

export const MessageReactions = () => {
  return (
    <Flex
      bg="black"
      w="100%"
      h="40px"
      mb="10px"
      align="center"
      justify="space-around"
    >
      <Flex align="center" justify="center" css={{ cursor: "pointer" }}>
        <LikeIcon fill="white" boxSize="20px" />
        <Text ml="5px" color="white">
          20
        </Text>
      </Flex>
      <Flex align="center" justify="center" css={{ cursor: "pointer" }}>
        <CommentIcon fill="white" boxSize="30px" />
        <Text ml="5px" color="white">
          20
        </Text>
      </Flex>
      <Flex align="center" justify="center" css={{ cursor: "pointer" }}>
        <ShareIcon fill="white" boxSize="22px" />
        <Text ml="5px" color="white">
          20
        </Text>
      </Flex>
    </Flex>
  );
};
