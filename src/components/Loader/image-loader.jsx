import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import loader from './img-loader.gif'

function index() {

    const smallScreens = useMediaQuery('(min-width: 1200px)')
  return (
    <>
   <Box display='grid' justifyContent='center' marginTop='0rem'>
   <img src={loader} width={smallScreens ? '100%': '100%'} height={smallScreens ? '100%': '100%'}></img>
   </Box>
   <Box display='grid' justifyContent='center'>
    
   </Box>
   </>
   
  )
}

export default index