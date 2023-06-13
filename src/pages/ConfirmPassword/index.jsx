import React, { useEffect, useState } from 'react'
import {Box, Typography} from '@mui/material'
import {store} from '../../store'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';


function index({onSubmit, onChange, mail}) {

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(()=>{
     confirm();
     console.log(store.getState().confirmedEmail.position)

 
  }, [])

  const confirm = async ()=> {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, store.getState().confirmedEmail.position);

      setSuccess(
         `A password reset link has been sent to ${store.getState().confirmedEmail.position}. Please check your email.`,
      );
      setError('')
    } catch (error) {
      let errorMessage = 'An error occurred. Please try again later.';

      // Handle specific error cases
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address. Please enter a valid email.';
          break;
        case 'auth/user-not-found':
          errorMessage =
            'No user found with the provided email. Please check your email address.';
          break;
        default:
          console.log(error);
      }

      setError(error)
    }
  }
 
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
               A link has been sent to your school mail, kindly login and set your Central Polls account.
        </Typography>
      </Box>

      {/* <Box>
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
      </Box> */}
      {/* <Box>
      <button style={{padding: '0.6rem', border:'none', borderRadius: '0.5rem', color: 'white', backgroundColor: 'rgb(140,31,31)', cursor: 'pointer'}}>
         Set Password        
      </button>
      </Box> */}
      <Box>
        {/* <Typography color='red'>
        {error}
        </Typography> */}
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