import { Box, Flex, Center, Text } from "@chakra-ui/react";
import React from "react";
import { ViewPort } from "./ViewPort";

export const Home = () => {
  return (
    <ViewPort pattern="circle" bgColor="#EB613D">
      <Flex direction="column" align="center" justify="center" height="25rem">
        <p>
          I'm <strong>Sacha Greif</strong>, a designer, developer, and
          entrepreneur.
        </p>
        {/* <p>
          I'm originally from Paris, France but these days I live in Osaka,
          Japan.
        </p>
        <p>
          <a href="mailto:hello@sachagreif.com">Say hello</a>, or keep
          scrolling.
        </p> */}
      </Flex>
    </ViewPort>
  );
};
