import { Flex, Image, Text } from "@chakra-ui/react";
import { UserOptions } from "./UserOptions";
import { HomeIcon } from "../icons/HomeIcon";
import { MessageIcon } from "../icons/MessageIcon";
import { NotificationIcon } from "../icons/NotificationIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { UserIcon } from "../icons/UserIcon";

export const SideBar = () => {

  const { innerWidth: width } = window;

  return (
    <Flex
      minH="100vh"
      bg="black"
      w="22%"
      direction="column"
      justify="space-evenly"
      align="center"
      position="fixed"
    >
      <Image
        src={width>900?"logoW.png":"logoMob.png"}
        w="85%"
      />
      <Flex
        direction="column"
        w="100%"
        align="center"
        justify="space-evenly"
        minH="300px"
      >
        <Flex
          _hover={{ bg: "#ffffff25", cursor: "pointer" }}
          borderRadius="30px"
          h="40px"
          w="90%"
          align="center"
          justify="flex-start"
        >
          <HomeIcon fill="white" boxSize="30px" mx="5px" />
          <Text color="white" fontSize="20px">
            Home
          </Text>
        </Flex>
        <Flex
          _hover={{ bg: "#ffffff25", cursor: "pointer" }}
          borderRadius="30px"
          h="40px"
          w="90%"
          align="center"
          justify="flex-start"
        >
          <MessageIcon fill="white" boxSize="30px" mx="5px" />
          <Text color="white" fontSize="20px">
            Nova Mesagem
          </Text>
        </Flex>
        <Flex
          _hover={{ bg: "#ffffff25", cursor: "pointer" }}
          borderRadius="30px"
          h="40px"
          w="90%"
          align="center"
          justify="flex-start"
        >
          <NotificationIcon fill="white" boxSize="30px" mx="5px" />
          <Text color="white" fontSize="20px">
            Notificações
          </Text>
        </Flex>
        <Flex
          _hover={{ bg: "#ffffff25", cursor: "pointer" }}
          borderRadius="30px"
          h="40px"
          w="90%"
          align="center"
          justify="flex-start"
        >
          <SearchIcon fill="white" boxSize="30px" mx="5px" />
          <Text color="white" fontSize="20px">
            Buscar
          </Text>
        </Flex>
        <Flex
          _hover={{ bg: "#ffffff25", cursor: "pointer" }}
          borderRadius="30px"
          h="40px"
          w="90%"
          align="center"
          justify="flex-start"
        >
          <UserIcon fill="white" boxSize="30px" mx="5px" />
          <Text color="white" fontSize="20px">
            Perfil
          </Text>
        </Flex>
      </Flex>
      <UserOptions
        name={"Rafael Rocha Casaque"}
        username={"@rrcasaque"}
        avatar="http://benini.paginas.scl.ifsp.edu.br/img/Rafael%20Rocha%20Casaque.jpeg"
      />
    </Flex>
  );
};
