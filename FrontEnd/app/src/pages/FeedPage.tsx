import { Divider, Flex, Text } from "@chakra-ui/react";
import { SideBar } from "../components/SideBar";
import { Message } from "../components/Message";
import { TrendingMessages } from "../components/TrendingMessages";

export const FeedPage = () => {
  return (
    <Flex justify="center" align="center" bg="#272525">
      <Flex w="100%" maxW="1300px" minH="100vh" bg="#ffe39a">
        <SideBar />
        <Flex
          ml={{ base: "60px", md: "60px", lg: "325px" }}
          w={{
            base: "calc(100% - 60px)",
            md: "calc(100% - 60px - 250px)",
            lg: "calc(100% - 650px)",
          }}
          minH="100%"
          direction="column"
          align="center"
        >
          <Text
            alignSelf="flex-start"
            m="20px"
            fontSize="30px"
            fontWeight="bold"
          >
            Home
          </Text>
          <Divider borderColor="black" mb="10px" />          
          <Message
            createdBy={"Charles 'DoBronxs' Oliveira"}
            usernameAuthor={"@CharlesDoBronxs"}
            createdAt={new Date()}
            description={
              "🏆🔥 Uau, os sonhos se tornam realidade mesmo! 🙌🏼🥇 Palavras não podem expressar a imensa alegria e gratidão que estou sentindo agora. 🎉🏆 Ser coroado campeão é um testemunho das incontáveis horas de trabalho duro, sacrifício e determinação inabalável. 💪🏼💯 Obrigado à minha incrível equipe, família e fãs pelo apoio incondicional ao longo dessa jornada. 🙏🏼❤️ Essa vitória pertence a todos nós! 🌟🔥"
            }
            CommentList={[
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
            ]}
            likeList={["","","","","","","","","","","","","","","",""]}
            shareList={["","","","","","","","","","","","","","","",""]}
            media={
              "https://i.superesportes.com.br/r_gULYsdLP4WuOHh6LC93TNdml8=/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2021/05/16/3915773/20210516111350638438a.jpg"
            }
            profileImage={
              "https://pbs.twimg.com/profile_images/1667751392985899010/RP6OPITH_400x400.jpg"
            }
          />
          <Message
            createdBy={"Ana Castela Brasil"}
            usernameAuthor={"@anacastelabr"}
            createdAt={new Date()}
            description={
              "💙🌟 Queridos seguidores e fãs, hoje quero dedicar um momento para expressar minha gratidão profunda por todo o amor e apoio que recebo diariamente! Vocês são verdadeiramente incríveis! 🙏🏼💖 Cada mensagem, cada curtida e cada palavra de encorajamento são combustíveis para minha jornada. Sem vocês, nada disso seria possível. 🌟✨ Obrigada por estarem ao meu lado, me impulsionando a alcançar novos patamares. Vocês são meu maior tesouro! 💙🤗"
            }
            CommentList={[
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
            ]}
            likeList={["","","","","","","","","","","","","","",]}
            shareList={["","","","","","","","","","","",""]}
            media={
              "https://uploads.metropoles.com/wp-content/uploads/2022/07/22121555/anacastela.jpg"
            }
            profileImage={
              "https://portalpopline.com.br/wp-content/uploads/2022/07/Design-sem-nome-2022-07-14T140304.634-800x602.jpg"
            }
          />
          <Message
            createdBy={"Charles 'DoBronxs' Oliveira"}
            usernameAuthor={"@CharlesDoBronxs"}
            createdAt={new Date()}
            description={
              "🏆🔥 Uau, os sonhos se tornam realidade mesmo! 🙌🏼🥇 Palavras não podem expressar a imensa alegria e gratidão que estou sentindo agora. 🎉🏆 Ser coroado campeão é um testemunho das incontáveis horas de trabalho duro, sacrifício e determinação inabalável. 💪🏼💯 Obrigado à minha incrível equipe, família e fãs pelo apoio incondicional ao longo dessa jornada. 🙏🏼❤️ Essa vitória pertence a todos nós! 🌟🔥"
            }
            CommentList={[
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
            ]}
            likeList={["","","","","","","","","","","","","","","",""]}
            shareList={["","","","","","","","","","","","","","","",""]}
            media={
              "https://i.superesportes.com.br/r_gULYsdLP4WuOHh6LC93TNdml8=/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2021/05/16/3915773/20210516111350638438a.jpg"
            }
            profileImage={
              "https://pbs.twimg.com/profile_images/1667751392985899010/RP6OPITH_400x400.jpg"
            }
          />
          <Message
            createdBy={"Ana Castela Brasil"}
            usernameAuthor={"@anacastelabr"}
            createdAt={new Date()}
            description={
              "💙🌟 Queridos seguidores e fãs, hoje quero dedicar um momento para expressar minha gratidão profunda por todo o amor e apoio que recebo diariamente! Vocês são verdadeiramente incríveis! 🙏🏼💖 Cada mensagem, cada curtida e cada palavra de encorajamento são combustíveis para minha jornada. Sem vocês, nada disso seria possível. 🌟✨ Obrigada por estarem ao meu lado, me impulsionando a alcançar novos patamares. Vocês são meu maior tesouro! 💙🤗"
            }
            CommentList={[
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
              {
                author: "Elias da Silva",
                avatar: "Elias da Silva",
                content: "Parabéns!!!",
                createdAt: new Date(),
              },
              {
                author: "Matheus Lucas",
                avatar: "Matheus Lucas",
                content: "Pra cima deles!!!",
                createdAt: new Date(),
              },
            ]}
            likeList={["","","","","","","","","","","","","","",]}
            shareList={["","","","","","","","","","","",""]}
            media={
              "https://uploads.metropoles.com/wp-content/uploads/2022/07/22121555/anacastela.jpg"
            }
            profileImage={
              "https://portalpopline.com.br/wp-content/uploads/2022/07/Design-sem-nome-2022-07-14T140304.634-800x602.jpg"
            }
          />
        </Flex>
        <TrendingMessages
          trendingMessagesList={[
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, mollitia veritatis",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, mollitia veritatis",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, mollitia veritatis",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, mollitia veritatis",
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, mollitia veritatis",
          ]}
        />
      </Flex>
    </Flex>
  );
};
