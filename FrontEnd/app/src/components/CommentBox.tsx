import { Flex } from "@chakra-ui/react";
import { Comment } from "./Comment";

export const CommentBox = () => {
  return (
    <Flex w="100%" justify="center" borderRadius="15px" bg="blackAlpha.200">
      <Flex
        w="95%"
        h="250px"
        p="10px"
        direction="column"
        overflow="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#555",
          },
        }}
      >
        <Comment author={"Noah Rissatti"} avatar={"https://media.licdn.com/dms/image/D4D03AQHOWhG-aosOBA/profile-displayphoto-shrink_800_800/0/1677162195835?e=1692835200&v=beta&t=xblBDCwtutMfg3sQwWrBcHrRvO-ALRjf2hB3McalcZc"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur est suscipit perspiciatis quae delectus excepturi vitae odio, voluptatem minima officiis temporibus ut provident optio expedita nemo nisi. Magnam, ea."} />
        <Comment author={"Laura Ranucci"} avatar={"https://media.licdn.com/dms/image/D4D03AQGnGQFcSsDgRw/profile-displayphoto-shrink_800_800/0/1684643073013?e=1692835200&v=beta&t=bL-IUzv5nscJERGqLjatQKBVybTuXEB6jJJheQqLsII"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur est suscipit perspiciatis quae delectus excepturi vitae odio, voluptatem minima officiis temporibus ut provident optio expedita nemo nisi. Magnam, ea."} />
        <Comment author={"Noah Rissatti"} avatar={"https://media.licdn.com/dms/image/D4D03AQHOWhG-aosOBA/profile-displayphoto-shrink_800_800/0/1677162195835?e=1692835200&v=beta&t=xblBDCwtutMfg3sQwWrBcHrRvO-ALRjf2hB3McalcZc"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur est suscipit perspiciatis quae delectus excepturi vitae odio, voluptatem minima officiis temporibus ut provident optio expedita nemo nisi. Magnam, ea."} />
        <Comment author={"Laura Ranucci"} avatar={"https://media.licdn.com/dms/image/D4D03AQGnGQFcSsDgRw/profile-displayphoto-shrink_800_800/0/1684643073013?e=1692835200&v=beta&t=bL-IUzv5nscJERGqLjatQKBVybTuXEB6jJJheQqLsII"} content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aspernatur est suscipit perspiciatis quae delectus excepturi vitae odio, voluptatem minima officiis temporibus ut provident optio expedita nemo nisi. Magnam, ea."} />
      </Flex>
    </Flex>
  );
};
