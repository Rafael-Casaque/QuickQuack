import { Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

interface LoginProps {
  rotate: string;
  index: string;
  children: React.ReactNode;
}

export const Login = (props: LoginProps) => {
  return (
    <Flex      
      h="50vh"
      w="50vw"
      align="center"
      justify="space-around"
      position="absolute"
      width="450px"
      height="525px"
      maxW="95%"
      p="0"
      border-radius="10px"
      transition="700ms"
      borderRadius="15px"
      backgroundImage="linear-gradient(to left top, #2a32e7, #0052f2, #006bf9, #0081fc, #2496fc, #4f98fc, #699afc, #7e9cfc, #9f89f5, #c171e4, #df52c8, #f423a2)"      
      direction="column"
      transform={props.rotate}
      zIndex={props.index}      
    >
        <Text fontSize="36px" w="100%" align="center">Sign In</Text>
      <Flex w="75%" direction="column" h="75%" justify="center">
          <FormControl mb="8px">
            <FormLabel>Email:</FormLabel>
            <Input bg="#ccc" type="email" placeholder="Digite seu endereço de email"/>        
          </FormControl>
          <FormControl mb="8px">
            <FormLabel>Senha:</FormLabel>
            <Input bg="#ccc" type="password" placeholder="Digite sua senha de acesso"/>        
          </FormControl>
          <Button colorScheme="blackAlpha" w="50%" alignSelf="center" mt="8px">Entrar</Button>                    
      </Flex>      
      {props.children}          
    </Flex>
  );
};
