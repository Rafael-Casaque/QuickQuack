import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface UserOptionsProps {
  name: string;
  username: string;
  avatar?: string;
}

export const UserOptions = (props: UserOptionsProps) => {

  const redirect = useNavigate();

  return (
    <Menu>
      <MenuButton as={Button} bg="transparent" h="60px" w={{base:"100%",md:"100%",lg:"90%"}} _active={{bg:'#ffffff25'}} _hover={{bg:'#ffffff25'}} borderRadius="30px" px={{base:"0",md:"0",lg:"10px"}}>
        <Flex          
          color="white"
          w="100%"
          h="60px"
          align="center"              
          justify="center"
          borderRadius="30px"                    
        >
          <Avatar name={props.name} bg="teal.400" src={props.avatar} />
          <Flex display={{base:"none",md:"none",lg:"block"}} ml="5px" direction="column" w="70%">
            <Text
              fontWeight="bold"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              w="100%"              
            >
              {props.name}
            </Text>
            <Text
              fontWeight="light"
              color="gray"
              align="left"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              w="100%"              
            >
              {props.username}
            </Text>
          </Flex>
        </Flex>
      </MenuButton>
      <MenuList bg="white" borderColor="transparent">
        <MenuItem alignSelf="center" borderRadius="5px">Sair</MenuItem>
        <MenuItem alignSelf="center" borderRadius="5px" onClick={()=>{redirect("/profile")}}>Alterar informações</MenuItem>
      </MenuList>
    </Menu>
  );
};
