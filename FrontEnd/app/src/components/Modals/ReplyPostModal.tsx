import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";

interface ReplyPostModalProps {
  btnFunction: () => void;
}

export const ReplyPostModal = (props: ReplyPostModalProps) => {
  return (
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <p>Reply Post</p>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" onClick={props.btnFunction}>
          send
        </Button>        
      </ModalFooter>
    </ModalContent>
  );
};
