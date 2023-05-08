import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import loader from './loader.gif'

function index() {

    const smallScreens = useMediaQuery('(min-width: 1200px)')
  return (
   <Box display='flex' justifyContent='center' marginTop='10rem'>
   <img src={loader} width={smallScreens ? '20%': '50%'} height={smallScreens ? '20%': '50%'}></img>
   </Box>
  )
}

export default index