import React from 'react'
import { Box } from '@mui/material'
import logo from './central.png'

function index() {
  return (
   <>
     <Box display='flex' justifyContent='space-between' padding='0.1rem' backgroundColor='white'>
          <Box marginLeft='3rem'>
            <img src={logo}/>
          </Box>
          {/* <Box>b</Box> */}
     </Box>
   </>
  )
}

export default index