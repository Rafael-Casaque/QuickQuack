import { Flex, Button } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/react';

export const LandingPage = () => {
    return (
        <>
            <Flex
                minH="100vh"
                w="100%"
                align="center"
                justify="center"
                bg="black"
                direction="column"
            >
                <Heading 
                as='h1' 
                size='4xl' 
                noOfLines={1} 
                bgGradient='linear-gradient(to left top, #2a32e7, #0052f2, #006bf9, #0081fc, #2496fc, #4f98fc, #699afc, #7e9cfc, #9f89f5, #c171e4, #df52c8, #f423a2)'
                bgClip='text'
                >
                    Quick Quack
                </Heading>
                <Button alignSelf="center" mt="24px">Acessar</Button>
            </Flex>
        </>
    )
}