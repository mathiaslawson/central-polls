import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import bigload from './bigload.gif'

function index() {
  const smallScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <>
      <Box
        display="grid"
        justifyContent="center"
        marginTop="15rem"
        position="relative"
      >
        <Box>
        <Typography textAlign='center' variant="h3" color='brown' fontWeight='900'>Central Polls v0.1</Typography>    
        </Box>  
        <img
          src={bigload}
          width={smallScreens ? "100%" : "100%"}
          height={smallScreens ? "80%" : "80%"}
        ></img>
      </Box>
      <Box display="grid" justifyContent="center"></Box>
    </>
  );
}

export default index;
