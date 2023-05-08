import React from 'react'
import { Box, Typography } from '@mui/material'
import logo from './central.png'
import {Link} from 'react-router-dom'
import {store} from '../../store'

function index() {

  //navbar login
  const user = store.getState().auth.user
  

 
  return (
   <>
    
     <Box display='flex' justifyContent='space-between' padding='0.1rem' backgroundColor='white' >
          <Box marginLeft='0.5rem'>
            <img src={logo} width='70%rem'/>
          </Box>
          {
            !user ? 
          <Box display='flex' marginRight='2rem' gap='0.5rem' marginTop='0.6rem'>
          <Box>
          <Link to='/login'>
            <button
              style={{
                border:'none',
                padding: '0.5rem',
                borderRadius: '0.9rem',
                cursor: 'pointer',
                border: 'solid',
                borderColor: '#8c1f1f', 
                backgroundColor: 'white',
                borderWidth: '0.03rem',
                fontSize: '0.8rem'
              }}
            >
             
              Login
             
            </button>
            </Link>
          </Box>
          <Box>
          <Link to='/register' style={{textDecoration: "none", color: 'white'}}>
          <button
              style={{
                border:'none',
                padding: '0.5rem',
                borderRadius: '0.9rem',
                cursor: 'pointer',
                border: 'solid',
                borderColor: 'white', 
                backgroundColor: '#8c1f1f',
                borderWidth: '0.1rem',
                fontSize: '0.8rem',
                fontWeight: 'lighter',
                color: 'white',
                width: 'max-content'
              }}
            >
             
              Register as a Voter
             
            </button>
            </Link>
          </Box>      
          </Box>
          //new contents if auth
           : 
          <Box>
            <Typography marginTop='0rem' marginRight='1rem' backgroundColor='brown' padding='1rem' borderRadius='3rem' color='white' height='3rem' width='max-content'>Welcome, {user}</Typography>
          </Box>
           }
     </Box>
    
   </>
  )
}

export default index