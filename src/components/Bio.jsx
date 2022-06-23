import { Box } from "@chakra-ui/react";
import React from "react";
import SVGBio from "./svg/SVGBio";

function Bio() {
  return (
    <Box bgColor="#A3D2DF">
      <SVGBio width="100%" height="100vh" />
    </Box>
  );
}

export default Bio;
