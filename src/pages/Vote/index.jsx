import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

function Index({ handleYesClick, candidateName, differentCandidate, goBack }) {
  return (
    <Box display="grid" justifyContent="center">
      <Box marginTop="5rem">
        <Typography variant="h2" fontWeight="500" textAlign='center'>
          Vote {candidateName} as President
        </Typography>
      </Box>

      <Box display="grid" justifyContent="center" marginTop="5rem">
        <button onClick={handleYesClick} style={{        
          padding: "4rem" , 
          borderRadius: '50%',
          borderColor: 'brown', 
          color: 'black', 
          backgroundColor: 'white',
          borderWidth: '1rem', 
          cursor: 'pointer'  
      }}>
          <Typography variant="h2">
            Yes
          </Typography>
        </button>

        <Box marginTop='2rem' display='grid' justifyContent='center' gap='1rem' >
          <Typography fontWeight='500'
          onClick = {differentCandidate}
          style={{
            cursor: 'pointer'
           }}>Choose Different Candidate</Typography>

          <Typography 
          onClick = {goBack}
          textAlign='center' fontWeight='500'
           style={{
            cursor: 'pointer'
           }}
          >Go Back</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
