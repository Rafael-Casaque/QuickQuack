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

interface UserOptionsProps {
  name: string;
  username: string;
  avatar?: string;
}

export const UserOptions = (props: UserOptionsProps) => {
  return (
    <Menu>
      <MenuButton as={Button} bg="transparent" h="60px" w="90%" _active={{bg:'#ffffff25'}} _hover={{bg:'#ffffff25'}} borderRadius="30px" px="10px">
        <Flex          
          color="white"
          w="100%"
          h="60px"
          align="center"              
          borderRadius="30px"          
        >
          <Avatar name={props.name} bg="teal.400" src={props.avatar} />
          <Flex ml="5px" direction="column" w="70%">
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
      <MenuList bg="transparent" borderColor="transparent">
        <MenuItem w="100px" alignSelf="center" mt="-10px" px="35px" borderRadius="5px">Sair</MenuItem>
      </MenuList>
    </Menu>
  );
};
