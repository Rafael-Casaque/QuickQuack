import { Image, Flex, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export const ErrorMessage = () => {

    const redirect = useNavigate()

    return (
        <Flex 
        direction="column"        
        >
            <Flex direction="row" 
            alignItems="center"
            justifyContent="center"
            height="300px"
            mb="-10">
                <Text fontFamily="sans-serif" fontSize={{base:"30vw",md:"20vw",lg:"300px"}}>4</Text>
                <Image 
                src="./patoCima.png"
                h={{base:"30vw",md:"30vw",lg:"300px"}}
                ></Image>
                <Text fontFamily="sans-serif" fontSize={{base:"30vw",md:"20vw",lg:"300px"}}>4</Text>
            </Flex>
            <Text align="center" fontSize={{base:"30px",md:"50px",lg:"60px"}} marginBottom="10">Erro quatrocentos e Quack</Text>
            <Text align="center" fontSize={{base:"20px",md:"35px",lg:"40px"}} marginBottom="10">Página não encontrada</Text>
            <Button mt={{base:"20px"}} alignSelf={"center"} onClick={()=>{redirect("/home")}}>Retornar à pagina principal</Button>
        </Flex>
    )
}