import { Box, Flex, Center, Text } from "@chakra-ui/react";
import React from "react";
import SVGHome from "./svg/SVGHome";

function Home() {
  return (
    <Box bgColor="#EB613D" height="100vh">
      <SVGHome width="100%" height="100vh" />
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="25rem"
        width="100%"
        bgColor="#ffffff"
        border="4px"
        borderColor="gray.200"
      >
        <p>
          I'm <strong>Sacha Greif</strong>, a designer, developer, and
          entrepreneur.
        </p>
        <p>
          I'm originally from Paris, France but these days I live in Osaka,
          Japan.
        </p>
        <p>
          <a href="mailto:hello@sachagreif.com">Say hello</a>, or keep
          scrolling.
        </p>
      </Flex>
    </Box>
  );
}

export default Home;
