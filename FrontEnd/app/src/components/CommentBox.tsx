import { Flex } from "@chakra-ui/react";
import { Comment } from "./Comment";

interface CommentBoxProps {
  CommentList: {
    author: string;
    avatar: string;
    content: string;
    createdAt: Date;
  }[];
}

export const CommentBox = (props: CommentBoxProps) => {
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
            background: "transparent",
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
        {props.CommentList.map((c) => {
          return <Comment {...c} />;
        })}
      </Flex>
    </Flex>
  );
};
