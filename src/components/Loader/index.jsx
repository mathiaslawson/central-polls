import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import loader from './loader.gif'

function index() {

    const smallScreens = useMediaQuery('(min-width: 1200px)')
  return (
    <>
   <Box display='grid' justifyContent='center' marginTop='10rem'>
   <img src={loader} width={smallScreens ? '100%': '100%'} height={smallScreens ? '100%': '100%'}></img>
   </Box>
   <Box display='grid' justifyContent='center'>
    <Typography marginTop='-5rem' marginLeft='1rem' variant='h2' color='brown'>
    Loading ...
   </Typography>
   </Box>
   </>
   
  )
}

export default index