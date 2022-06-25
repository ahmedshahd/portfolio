import { Box } from "@chakra-ui/react";
import React from "react";
import circle from "./patterns/circle.svg";
import tShape from "./patterns/t-shape.svg";

const patternsIMG = {
  circle,
  tShape,
};

export const ViewPort = ({ children, bgColor, pattern }) => {
  const bgImg = patternsIMG[pattern] ? `url(${patternsIMG[pattern]})` : "none";
  console.log(bgImg);
  return (
    <Box bgColor={bgColor} width="100vw" height="100vh" bgImg={bgImg}>
      {children}
    </Box>
  );
};
