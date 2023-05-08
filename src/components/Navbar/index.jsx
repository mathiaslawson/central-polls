import React from 'react'
import { Box, Typography } from '@mui/material'
import logo from './central.png'
import {Link} from 'react-router-dom'
import {store} from '../../store'
import Logout from '../../actions/Logout'

function index() {

  //navbar login
  const user = store.getState().auth.user
  
  return (
   <>
    
     <Box display='flex' justifyContent='space-between' padding='0.1rem' backgroundColor='white' >
          <Box marginLeft='0.5rem' marginTop='0.3rem'>
            <img src={logo} width='70%'/>
          </Box>
          {
            !user ? 
          <Box display='flex' marginRight='2rem' gap='0.5rem' marginTop='0.8rem'>
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
          <Box display='flex' position='relative' left='-0.7rem'>
            <Typography marginTop='0.3rem' marginRight='1rem' backgroundColor='brown' padding='0.4rem' borderRadius='3rem' color='white' height='2rem' width='max-content'>{user}</Typography>
      <button
        onClick={() => {
          store.dispatch(Logout(null))
          window.location.href = './home'
        }}
        style={{
          border:'none',
          borderRadius: '1.2rem',
          marginLeft: '-0.5rem',
          width: 'max-content',
          padding:'0.3rem',
          height:'2rem',
          marginTop: '0.4rem',
          border:'solid',
          borderColor:'brown',
          backgroundColor:'white',
          borderWidth:'0.2rem',
          cursor: 'pointer'
           }}
         >
        Logout
      </button>
          </Box>
           }
     </Box>
    
   </>
  )
}

export default index