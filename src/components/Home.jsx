import { Box, Flex, Center, Text } from "@chakra-ui/react";
import React from "react";
import SVGHome from "./svg/SVGHome";

function Home() {
  return (
    <Flex bgColor="#EB613D" h="100vh">
      <SVGHome width="100%" height="100vh" />
      <Flex>
        <Center width="50%" height="110px" bg="white">
          <Text>Box 1</Text>
        </Center>
      </Flex>
    </Flex>
  );
}

export default Home;
