import { Box } from "@chakra-ui/react";
import React from "react";
import SVGGraveyard from "./svg/SVGGraveyard";

function Graveyard() {
  return (
    <Box bgColor="#404448">
      <SVGGraveyard width="100%" height="100vh" />
    </Box>
  );
}

export default Graveyard;
