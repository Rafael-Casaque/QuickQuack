import {
  AspectRatio,
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { OptionsIcon } from "../icons/OptionsIcon";
import { MessageReactions } from "./MessageReactions";
import { CommentBox } from "./CommentBox";
import { useState } from "react";
import { calculateTimeDifference } from "./Comment";

interface MessageProps {
  createdBy: string;
  usernameAuthor: string;
  createdAt: Date;
  description: string;
  media: string;
  profileImage: string;
  CommentList: {
    author: string;
    avatar: string;
    content: string;
    createdAt: Date;
  }[];
  likeList: string[];
  shareList: string[];
}

export const Message = (props: MessageProps) => {
  const [showComment, setShowComment] = useState(false);

  const isPhoto = /\.(jpe?g|png|gif|bmp|webp)$/i.test(props.media);

  return (
    <Flex
      w="98%"
      maxW="550px"
      px="10px"
      py="5px"
      bg="black"
      color="white"
      borderRadius="15px"
      my="5px"
    >
      <Flex w="100%" direction="column">
        <Flex justify="space-between">
          <Flex align="center">
            <Avatar src={props.profileImage} />
            <Text ml="10px" fontWeight="bold">
              {props.createdBy + " "}
              <Text as="span" fontWeight="light">
                {props.usernameAuthor} ·{" "}
                {calculateTimeDifference(props.createdAt)}
              </Text>
            </Text>
          </Flex>
          <Flex fontWeight="bold" align="center">
            <Menu placement="left">
              <MenuButton bg="transparent" as={Button} colorScheme="teal">
                <Flex>
                  <OptionsIcon boxSize="25px" fill="white" />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem color="black">
                  Deixar de seguir {props.usernameAuthor}
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        <Flex direction="column">
          <Text ml="5px" align="justify" textIndent="40px">
            {props.description}
          </Text>
          <AspectRatio ratio={1} my="10px" minH="450px">
            {isPhoto ? (
              <img src={props.media} alt="" />
            ) : (
              <video src={props.media} controls />
            )}
          </AspectRatio>
          <MessageReactions
            likeCount={props.likeList.length}
            commentCount={props.CommentList.length}
            shareCount={props.shareList.length}
          />

          {showComment ? (
            <CommentBox CommentList={props.CommentList} />
          ) : (
            props.CommentList.length > 0 && (
              <Text
                align="center"
                onClick={() => {
                  setShowComment(!showComment);
                }}
                css={{ cursor: "pointer" }}
              >
                Ver comentários
              </Text>
            )
          )}
          {showComment && (
            <Text
              align="center"
              onClick={() => {
                setShowComment(!showComment);
              }}
              css={{ cursor: "pointer" }}
            >
              Esconder comentários
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
