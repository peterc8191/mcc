import * as React from "react";
import { Slide, Stack } from "@mui/material";
import home from "../images/homeImg.webp";
import commercial from "../images/commecial.jpg";

function ImageStack() {
  return (
    <Stack spacing={0}>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <img src={home} className="image-stack" alt={"logo"} />
      </Slide>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <img src={commercial} className="image-stack" alt={"logo"} />
      </Slide>
    </Stack>
  );
}

export default ImageStack;
