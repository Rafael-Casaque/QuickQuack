import { Avatar, Button, Flex, FormControl, FormLabel, Heading, Input, Textarea } from "@chakra-ui/react"
import { SideBar } from "../components/SideBar"
import React from "react"

interface UserProfileProps {
    name: string;
    bio: string;
    avatar?: string;
    password: string;
}

export const UserProfilePage = (props: UserProfileProps) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

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
                <Flex w="100%" direction="row" justify="center" align="center" mt="16px">                    
                    <Heading size='md' color="white">Editar perfil</Heading>                    
                </Flex>
                <Avatar name={props.name} size='2xl' src={props.avatar} mt="16px" />
                <FormControl as='fieldset' w="80%" border="2px" mt="15px" borderRadius="15px" >
                    <FormLabel as='legend' fontSize="18px">Nome</FormLabel>
                    <Input variant='unstyled' padding="5px" value={props.name} color='white'/>
                </FormControl>
                <FormControl as='fieldset' w="80%" border="2px" mt="15px" borderRadius="15px" >
                    <FormLabel as='legend' fontSize="18px">Bio</FormLabel>
                    <Textarea variant='unstyled' padding="5px" value={props.bio} color='white'/>
                </FormControl>
                <FormControl as='fieldset' w="80%" border="2px" mt="15px" borderRadius="15px" >
                    <FormLabel as='legend' fontSize="18px">Senha</FormLabel>
                    <Flex direction="row" justify="space-between" align="center">
                        <Input
                            type={show ? 'text' : 'password'}
                            variant='unstyled'
                            padding="5px" 
                            value={props.password}
                            color='white'/>
                        <Button size='sm' onClick={handleClick} mr='15px' mb='5px' borderRadius="30px">
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </Flex>
                </FormControl>
                <Button borderRadius="30px" justifySelf="end" mr="16px">Salvar</Button>
            </Flex>
        </Flex>
    )
}