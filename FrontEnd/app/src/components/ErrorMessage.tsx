import { extendTheme, Image, Flex, FormControl, FormLabel, Input, Text, Button } from "@chakra-ui/react";

export const ErrorMessage = () => {

    return (
        <Flex 
        direction="column"
        >
            <Flex direction="row" 
            alignItems="center"
            justifyContent="center"
            height={"300"}
            marginBottom={-10}>
                <Text fontFamily="sans-serif" fontSize="300px">4</Text>
                <Image 
                src="./patoCima.png"
                h="300"
                ></Image>
                <Text fontFamily="sans-serif" fontSize="300px">4</Text>
            </Flex>
            <Text align="center" fontSize={60} marginBottom={10}>Erro quatrocentos e Quack</Text>
            <Text align="center" fontSize={40} marginBottom={10}>Página não encontrada</Text>
            <Button alignSelf={"center"} w="50%">Retornar a pagina principal</Button>
        </Flex>
    )
}