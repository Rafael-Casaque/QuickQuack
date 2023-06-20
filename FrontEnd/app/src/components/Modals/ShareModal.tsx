import {
    Button,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
  } from "@chakra-ui/react";
  
  interface ShareModalProps {
    btnFunction: () => void;
  }
  
  export const ShareModal = (props: ShareModalProps) => {
    return (
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Share Modal</p>
        </ModalBody>
  
        <ModalFooter>
          <Button colorScheme="blue" onClick={props.btnFunction}>
            send
          </Button>        
        </ModalFooter>
      </ModalContent>
    );
  };
  