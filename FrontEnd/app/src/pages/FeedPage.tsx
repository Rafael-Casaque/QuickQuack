import { Divider, Flex, Text } from "@chakra-ui/react";
import { SideBar } from "../components/SideBar";
import { Message } from "../components/Message";
import { TrendingMessages } from "../components/TrendingMessages";

export const FeedPage = () => {
  return (
    <Flex w="100%" minH="100vh">
      <SideBar />
      <Flex ml={{ base: "60px", md: "60px", lg: "325px" }} w={{base:"calc(100% - 60px)",md:"calc(100% - 60px - 250px)",lg:"calc(100% - 650px)"}} minH="100%" direction="column" align="center">        
      <Text alignSelf="flex-start" m="20px" fontSize="30px" fontWeight="bold">Home</Text>
      <Divider borderColor="black" mb="10px"/>
        <Message createdBy={""} usernameAuthor={""} createdAt={new Date()} description={""} CommentList={[]} likeList={[]} shareList={[]}/>
        <Message createdBy={""} usernameAuthor={""} createdAt={new Date()} description={""} CommentList={[]} likeList={[]} shareList={[]}/>
        <Message createdBy={""} usernameAuthor={""} createdAt={new Date()} description={""} CommentList={[]} likeList={[]} shareList={[]}/>        
        <Message createdBy={""} usernameAuthor={""} createdAt={new Date()} description={""} CommentList={[]} likeList={[]} shareList={[]}/>        
        <Message createdBy={""} usernameAuthor={""} createdAt={new Date()} description={""} CommentList={[]} likeList={[]} shareList={[]}/>        
      </Flex>
      <TrendingMessages trendingMessagesList={['','','','','']}/>
    </Flex>
  );
};
