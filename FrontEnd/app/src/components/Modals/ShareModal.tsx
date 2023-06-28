import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export const ShareModal = () => {
  const [description, setDescription] = useState("");

  return (
    <ModalContent>
      <ModalHeader>Compartilhar postagem</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Textarea
          h="175px"
          resize="none"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
          placeholder="Insira uma descrição"
        ></Textarea>
      </ModalBody>

      <ModalFooter>
        <Button
          colorScheme="blue"
          onClick={() => {
            publish(description);
          }}
        >
          Publicar
        </Button>
      </ModalFooter>
    </ModalContent>
  );
};

const publish = (description: string) => {
  console.log(description);
};
