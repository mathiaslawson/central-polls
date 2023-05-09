import React, { useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "./cd.css";
import RoundedAvatar from "../../components/RoundedAvatar";
import {Link} from 'react-router-dom'

function index({ details }) {
  const smallScreens = useMediaQuery("(min-width:1200px)");
  console.log(details);

  return (
    <>
      <Box padding="2rem">
        <Box display="grid">
          <Box>
            <Typography variant="h3" fontWeight="600">
              Candidates Profile
            </Typography>
          </Box>

          <Box
            display={smallScreens ? "flex" : "grid"}
            marginTop="2rem"
            justifyContent="space-between"
            height="75vh"
            width="100%"
            gap="1rem"
          >
            <Box
              width={smallScreens ? "40%" : "100%"}
              backgroundColor="#fff"
              borderRadius="0.5rem"
              padding="1rem"
              display="grid"
              justifyContent="center"
            >
              {/* <Box
                      className='profile'
                      height={smallScreens ? '3l0vh': '30vh'}
                      width={smallScreens ? '75%': '90%'}
                      marginLeft={smallScreens? '2rem': '0.7rem'}
                      >
                      </Box> */}
              <RoundedAvatar />
              <Box marginTop={smallScreens ? "2rem" : "2rem"}>
                <Typography textAlign="center" variant="h5" fontWeight="600">
                  {" "}
                  {details.candidateName}
                </Typography>
                <Typography
                  textAlign="center"
                  marginTop="4rem"
                  fontWeight="600"
                >
                  {" "}
                  Vote as {details.candidateDepartment}{" "}
                  {details.candidatePosition}
                </Typography>
                <Typography
                  textAlign="center"
                  marginTop="0.5rem"
                  color="#751919"
                  fontWeight="900"
                >
                  # {details.candidateSlogan}#
                </Typography>
                <Link to='/vote'>
                <Box display='grid' marginTop='2rem' style={{textDecoration:'none'}}>
                 <button
                   style={{
                    border:'none',
                    padding: '1rem',
                    borderRadius: '1rem',
                    backgroundColor: 'brown',
                    borderStyle: 'solid',
                    color: 'white',
                    cursor: 'pointer',
                    textDecoration: 'none'
                   }}
                 >
                        Vote
                 </button>
                 </Box>
                 </Link>
              </Box>
            </Box>
            <Box
              padding="0.7rem"
              width={smallScreens ? "100%" : "100%"}
              height={smallScreens ? "inherit" : "max-content"}
              borderRadius="0.5rem"
              display="grid"
              gap="1rem"
            >
              {/* Basic Information */}
              <Box
                backgroundColor="white"
                width="100%"
                height="35vh"
                borderRadius="0.5rem"
              >
                <Box padding="1rem">
                  <Typography variant="h4" fontWeight="bolder" color="#751919">
                    Basic Information
                  </Typography>
                  <Box
                    display="flex"
                    justifyContent="space-evenly"
                    marginTop="1rem"
                  >
                    <Box
                      display="grid"
                      textAlign="center"
                      justifyContent="left"
                    >
                      <Typography fontWeight="bolder">Level</Typography>
                      <Typography>Level {details.candidateLevel}</Typography>
                    </Box>
                    <Box
                      display="grid"
                      textAlign="center"
                      justifyContent="left"
                    >
                      <Typography fontWeight="bolder">Department</Typography>
                      <Typography>{details.candidateDepartment}</Typography>
                    </Box>
                    <Box
                      display="grid"
                      textAlign="center"
                      justifyContent="left"
                    >
                      <Typography fontWeight="bolder">Course</Typography>
                      <Typography>Computer Science</Typography>
                    </Box>
                  </Box>
                  <Box marginTop="2rem">
                    <Typography
                      fontWeight="bolder"
                      variant="h4"
                      color="#751919"
                    >
                      Experience
                    </Typography>
                    <Typography marginTop="1rem">
                      Feature coming soon ...
                    </Typography>
                  </Box>
                </Box>

                <Box></Box>
              </Box>

              {/*Campaign Promise  */}
              <Box
                backgroundColor="white"
                width="100%"
                height="40vh"
                borderRadius="0.5rem"
                padding="1rem"
              >
                <Box display="grid">
                  <Typography
                    fontWeight="bolder"
                    variant="h4"
                    color="#751919"
                    textAlign="center"
                  >
                    Campaign Promises
                  </Typography>
                  <Typography
                    marginTop="2rem"
                    fontWeight="100"
                    textAlign="center"
                  >
                    Eyyy plenty promises like this, can you do them ... Eyyy
                    plenty promises like this, can you do them ... Eyyy plenty
                    promises like this, can you do them ... Eyyy plenty promises
                    like this, can you do them ... Eyyy plenty promises like
                    this, can you do them ... Eyyy plenty promises like this,
                    can you do them ...
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default index;
