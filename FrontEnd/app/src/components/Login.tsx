import { Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from 'react'

interface LoginProps {
  rotate: string;
  index: string;
  children: React.ReactNode;
}

export const Login = (props: LoginProps) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Flex w="75%" as="form" direction="column" h="75%" justify="center">
        <FormControl mb="8px">
          <FormLabel>Email:</FormLabel>
          <Input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} bg="#ccc" placeholder="Digite seu endereço de email" />
        </FormControl>
        <FormControl mb="8px">
          <FormLabel>Senha:</FormLabel>
          <Input value={password} onChange={(e) => { setPassword(e.target.value) }} bg="#ccc" type="password" placeholder="Digite sua senha de acesso" />
        </FormControl>
        <Button type="submit" onClick={(e) => { e.preventDefault(); login(email, password) }} colorScheme="blackAlpha" w="50%" alignSelf="center" mt="8px">Entrar</Button>
      </Flex>
      {props.children}
    </Flex>
  );
};

const login = (email: string, password: string) => {
  console.log({
    email: email,
    password: password,
  })
}
