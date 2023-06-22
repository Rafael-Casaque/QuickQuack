import { Avatar, Button, CloseButton, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"
import { SideBar } from "../components/SideBar"

export const UserProfilePage = () => {
    return (
        <Flex w="100%" minH="100vh">
            <SideBar />
            <Flex w="40%"
                h="85vh"
                bg="black"
                direction="column"
                align="center"
                borderRadius="30px"
                ml="40%"
                mt="3%"
            >
                <Flex w="100%" direction="row" justify="space-between" align="center" mt="16px">
                    <CloseButton color="white" mr="10%" ml="16px" _hover={{ bg: "#ffffff25", cursor: "pointer" }} />
                    <Heading size='md' color="white">Editar perfil</Heading>
                    <Button borderRadius="30px" justifySelf="end" mr="16px">Salvar</Button>
                </Flex>
                <Avatar name="Rafael Rocha Casaque" size='2xl' src="http://benini.paginas.scl.ifsp.edu.br/img/Rafael%20Rocha%20Casaque.jpeg" mt="16px" />
                <FormControl as='fieldset' w="80%" border="2px" mt="15px">
                    <FormLabel as='legend' fontSize="18px">Nome</FormLabel>
                    <Input placeholder='Rafael Casaque' variant='unstyled' padding="5px"/>
                </FormControl>
            </Flex>
        </Flex>
    )
}