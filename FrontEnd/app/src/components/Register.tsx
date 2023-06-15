import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface RegisterProps {
  rotate: string;
  index: string;
  children: React.ReactNode;
}

export const Register = (props: RegisterProps) => {

  const [bDate, setBDate] = useState("");
  const [name, setName] = useState("");
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
      style={{ backfaceVisibility: "hidden" }}
      transform={props.rotate}
      zIndex={props.index}
    >
      <Text fontSize="36px" w="100%" align="center">
        Sign Up
      </Text>
      <Flex as="form" w="75%" direction="column" h="75%" justify="center">
        <FormControl mb="8px">
          <FormLabel>Nome:</FormLabel>
          <Input
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            bg="#ccc"
            type="text"
            placeholder="Digite seu nome completo"
          />
        </FormControl>
        <FormControl mb="8px">
          <FormLabel>Email:</FormLabel>
          <Input
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            bg="#ccc"
            type="email"
            placeholder="Digite seu endereço de email"
          />
        </FormControl>
        <FormControl mb="8px">
          <FormLabel>Data de nascimento:</FormLabel>
          <Input
            value={bDate}
            onChange={(e) => { setBDate(e.target.value) }}
            bg="#ccc"
            type="date"
          />
        </FormControl>
        <FormControl mb="8px">
          <FormLabel>Senha:</FormLabel>
          <Input
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            bg="#ccc"
            type="password"
            placeholder="Digite sua senha de acesso"
          />
        </FormControl>
        <Button type="submit" onClick={(e) => { e.preventDefault(); register(email, password, name, new Date(parseInt(bDate.slice(0, 4)), parseInt(bDate.slice(5, 7)), parseInt(bDate.slice(8, 10)))) }} colorScheme="blackAlpha" w="50%" alignSelf="center" mt="8px">
          Cadastrar
        </Button>
      </Flex>
      {props.children}
    </Flex>
  );
};

const register = (email: string, password: string, name: string, bDate: Date) => {
  console.log({
    name: name,
    bDate: bDate.toLocaleDateString(),
    email: email,
    password: password,
  })
}
