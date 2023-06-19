import { Flex, Text } from "@chakra-ui/react"

export const TrendingMessages = () => {
    return(
        <Flex bg="black" minH="100vh" position="fixed" w="30%" right="0px" align="center" direction="column" justify="flex-start">
            <Flex bg="#272525" color="white" w="85%" direction="column" align="center" borderRadius="15px" p="10px" mt="20px">
                <Text w="100%" textAlign="left" fontWeight="bold" fontSize="26px">Tendências</Text>
                <Text align="justify" my="5px" fontWeight="light"><Text fontWeight="bold" color="whiteAlpha.500" as="span">#1</Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, deleniti repudiandae, sapiente aliquid ab modi voluptatum</Text>
                <Text align="justify" my="5px" fontWeight="light"><Text fontWeight="bold" color="whiteAlpha.500" as="span">#2</Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, deleniti repudiandae, sapiente aliquid ab modi voluptatum</Text>
                <Text align="justify" my="5px" fontWeight="light"><Text fontWeight="bold" color="whiteAlpha.500" as="span">#3</Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, deleniti repudiandae, sapiente aliquid ab modi voluptatum</Text>
                <Text align="justify" my="5px" fontWeight="light"><Text fontWeight="bold" color="whiteAlpha.500" as="span">#4</Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, deleniti repudiandae, sapiente aliquid ab modi voluptatum</Text>
                <Text align="justify" my="5px" fontWeight="light"><Text fontWeight="bold" color="whiteAlpha.500" as="span">#5</Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, deleniti repudiandae, sapiente aliquid ab modi voluptatum</Text>
            </Flex>
        </Flex>
    )
}