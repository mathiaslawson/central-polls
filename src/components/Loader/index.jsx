import React from 'react'
import { Box } from '@mui/material'
import loader from './loader.gif'

function index() {
  return (
<Box display='flex' justifyContent='center' marginTop='10rem'>
   <img src={loader} width='30%' height='30%'></img>
   </Box>
  )
}

export default index