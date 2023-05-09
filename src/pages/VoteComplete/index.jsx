import React from 'react'
import {Box, Typography} from '@mui/material'
import correct from './correct.gif'

function index() {
  return (
   <>
   <Box display='grid' justifyContent='center' marginTop='10rem' >
     <Typography variant='h3' textAlign='center'>
     Vote Complete Thank You </Typography>

     <Box display='grid' justifyContent='center'>
     <img src={correct} width='100%' height='50%' style={{marginTop: '3rem'}}></img>
     </Box>
    
   </Box>
   </>
  )
}

export default index