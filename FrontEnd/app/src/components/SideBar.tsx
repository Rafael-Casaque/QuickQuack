import { Flex, Image, Text } from "@chakra-ui/react";
import { UserOptions } from "./UserOptions";
import { HomeIcon } from "../icons/HomeIcon";
import { MessageIcon } from "../icons/MessageIcon";
import { NotificationIcon } from "../icons/NotificationIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { UserIcon } from "../icons/UserIcon";
import { useNavigate } from "react-router";

export const SideBar = () => {
  const redirect = useNavigate();

  const { innerWidth: width } = window;

  return (
    <Flex
      minH="100vh"
      bg="black"
      w={{ base: "60px", md: "60px", lg: "325px" }}
      direction="column"
      justify="space-evenly"
      align="center"
      position="fixed"
    >
      <Image src={width > 991 ? "logoW.png" : "logoMob.png"} w="85%" />
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
          h="50px"
          w={{base:"50px",md:"50px",lg:"90%"}}
          align="center"
          justify={{base:"center",md:"center",lg:"flex-start"}}
          onClick={() => {
            redirect("/home");
          }}
        >
          <HomeIcon fill="white" boxSize="30px" mx="5px" />
          <Text
            display={{ base: "none", md: "none", lg: "block" }}
            color="white"
            fontSize="20px"
          >
            Home
          </Text>
        </Flex>
        <Flex
          _hover={{ bg: "#ffffff25", cursor: "pointer" }}
          borderRadius="30px"
          h="50px"
          w={{base:"50px",md:"50px",lg:"90%"}}
          align="center"
          justify={{base:"center",md:"center",lg:"flex-start"}}
        >
          <NotificationIcon fill="white" boxSize="30px" mx="5px" />
          <Text display={{ base: "none", md: "none", lg: "block" }} color="white" fontSize="20px">
            Notificações
          </Text>
        </Flex>
        <Flex
          _hover={{ bg: "#ffffff25", cursor: "pointer" }}
          borderRadius="30px"
          h="50px"
          w={{base:"50px",md:"50px",lg:"90%"}}
          align="center"
          justify={{base:"center",md:"center",lg:"flex-start"}}
        >
          <SearchIcon fill="white" boxSize="30px" mx="5px" />
          <Text display={{ base: "none", md: "none", lg: "block" }} color="white" fontSize="20px">
            Buscar
          </Text>
        </Flex>
        <Flex
          _hover={{ bg: "#ffffff25", cursor: "pointer" }}
          borderRadius="30px"
          h="50px"
          w={{base:"50px",md:"50px",lg:"90%"}}
          align="center"
          justify={{base:"center",md:"center",lg:"flex-start"}}
        >
          <UserIcon fill="white" boxSize="30px" mx="5px" />
          <Text display={{ base: "none", md: "none", lg: "block" }} color="white" fontSize="20px">
            Perfil
          </Text>
        </Flex>
        <Flex
          _hover={{ bg: "#fd54a5", cursor: "pointer" }}
          borderRadius="30px"
          h="50px"
          w={{base:"50px",md:"50px",lg:"90%"}}
          align="center"
          justify="center"
          bg="#f0348b"
        >
          <MessageIcon fill="white" boxSize="30px" mx="5px" />
          <Text display={{ base: "none", md: "none", lg: "block" }} color="white" fontSize="20px">
            Nova Postagem
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
