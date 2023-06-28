import { Flex, Text, useDisclosure } from "@chakra-ui/react";
import { LikeIcon } from "../icons/LikeIcon";
import { CommentIcon } from "../icons/CommentIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { useState } from "react";
import { ShareModal } from "./Modals/ShareModal";
import { ReplyPostModal } from "./Modals/ReplyPostModal";
import { CustomModal } from "./Modals/CustomModal";
import { SelectedLikeIcon } from "../icons/SelectedLikeIcon";

interface MessageReactionsProps {
  likeCount: number;
  commentCount: number;
  shareCount: number;
}

export const MessageReactions = (props: MessageReactionsProps) => {
  const [modal, setModal] = useState<JSX.Element>(<></>);
  const [like, setLike] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      bg="black"
      w="100%"
      h="40px"
      mb="10px"
      align="center"
      justify="space-around"
    >
      <Flex
        align="center"
        justify="center"
        css={{ cursor: "pointer" }}
        onClick={() => {
          setLike(!like);
        }}
      >
        {!like ? (
          <LikeIcon fill="white" boxSize="20px" />
        ) : (
          <SelectedLikeIcon fill="white" boxSize="20px" />
        )}
        <Text ml="5px" color="white">
          {props.likeCount}
        </Text>
      </Flex>
      <Flex
        id="comment"
        align="center"
        justify="center"
        css={{ cursor: "pointer" }}
        onClick={(e) => {
          changeModal(e.currentTarget.id, setModal, onOpen);
        }}
      >
        <CommentIcon fill="white" boxSize="30px" />
        <Text ml="5px" color="white">
          {props.commentCount}
        </Text>
      </Flex>
      <Flex
        id="share"
        align="center"
        justify="center"
        css={{ cursor: "pointer" }}
        onClick={(e) => {
          changeModal(e.currentTarget.id, setModal, onOpen);
        }}
      >
        <ShareIcon fill="white" boxSize="22px" />
        <Text ml="5px" color="white">
          {props.shareCount}
        </Text>
      </Flex>
      <CustomModal isOpen={isOpen} onClose={onClose} children={modal} />
    </Flex>
  );
};

const changeModal = (
  id: string,
  setModal: React.Dispatch<React.SetStateAction<JSX.Element>>,
  onOpen: () => void
) => {
  onOpen();
  switch (id) {
    case "share":
      setModal(<ShareModal />);
      break;
    case "comment":
      setModal(<ReplyPostModal btnFunction={() => {}} />);
      break;
  }
};
