import React from 'react'
import {Box, Typography} from '@mui/material'


function index({onSubmit, onChange, error, success, schoolMail}) {
 
  return (
    <>
    
    
    <form onSubmit={onSubmit}>
    <Box display='grid' justifyContent='center' mt='7rem' textAlign='center' gap='2rem'>
      <Box>
        <Typography fontWeight='bold' variant='h3'>
               Set Account Password
        </Typography>
      </Box>  

      <Box mt='-2rem'>
      <Typography fontWeight='light' variant='h6' p='1rem'>
               Enter you school mail and hit the button below, to be able to set your account password and login.
        </Typography>
      </Box>

      <Box>
      <input
      variant="outlined"
      margin="normal"
      required
      id="email"
      label="Work Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      onChange= {onChange}    
      placeholder='mail@central.edu.gh'
      style={{
        height:'3rem',
        border: 'none',
        borderRadius: '0.5rem',
        borderStyle: 'solid',
        borderColor: 'rgb(140,31,31)',
        borderWidth: '0.02rem',
        padding: '1rem'
      }}

      >
      </input>
      </Box>
      <Box>
      <button style={{padding: '0.6rem', border:'none', borderRadius: '0.5rem', color: 'white', backgroundColor: 'rgb(140,31,31)', cursor: 'pointer'}}>
         Set Password        
      </button>
      </Box>
      <Box>
        <Typography color='red'>
        {error}
        </Typography>
        <Typography color='green'>
        {success}
        </Typography>
      </Box>
         
        <Box style={{cursor: 'pointer'}} onClick={()=>{
          window.location.href = './login'
        }}>
          <Typography >
            Proceed to Login
          </Typography>
        </Box>
        </Box>
       </form>
    
    </>
  )
}

export default index