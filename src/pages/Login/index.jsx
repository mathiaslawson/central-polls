import {Box, useMediaQuery, Typography} from '@mui/material'
import login from './login.png'


function Index({onChange, onSubmit, error}) {
  const smallScreens = useMediaQuery('(min-width: 1200px)');

  return (
    <>
       <Box 
       display='flex'
       justifyContent='space-between'
       marginTop='4vh'
       padding='2rem'
       width='100%'
       >
        {/* left */}
        <Box
         display='flex'
         justifyContent='center'
         gap={smallScreens && '0rem'}
         width='100%'
         sx={smallScreens ? {display: 'flex'}: {display: 'grid'}}
        >
            <Box
             display='grid'
            
            >
              <Typography variant='h6' fontWeight='bolder' color='#8c1f1f' fontFamily='calibri' fontSize='3rem'>
                  Login
              </Typography>
              <Typography variant='h4' fontFamily='calibri'>
              If you don't have an account
              you can <span style={{color: '#8c1f1f'}}>register here.</span>
              </Typography>
              <br />
              <br />
              <img src={login} alt='login image' style={smallScreens ? {width: '90%'}: {width: '70%', marginLeft: '3rem'}}/>
            </Box>
            {/* right */}
            <Box
              display='grid'
              justifyContent='center'
              padding='4rem'
              height='10vh'
              gap='2rem'
              marginTop={smallScreens && {marginTop: '10rem'}}
              onSubmit={onSubmit}
              component='form'
            >
             
               <input 
                onChange= {onChange}
                name='email'
                id='email'
               style={!smallScreens ? {
                padding: '1rem',
                border: 'none',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderColor: 'rgb(140,31,31)',
                borderWidth: '0.02rem'
              }: { 
              padding: '1rem',
              width: '150%',
              border: 'none',
              borderRadius: '0.5rem',
              borderStyle: 'solid',
              borderColor: 'rgb(140,31,31)',
              borderWidth: '0.02rem',
            }
            } placeholder='Student Mail'
              >

              </input>

               <input 
               onChange= {onChange}
               name='password'
               id='password'
               type='password'
               style={!smallScreens ? {
                padding: '1rem',
               
                border: 'none',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderColor: 'rgb(140,31,31)',
                borderWidth: '0.02rem'
              }: { 
              padding: '1rem',
              width: '150%',
              border: 'none',
              borderRadius: '0.5rem',
              borderStyle: 'solid',
              borderColor: 'rgb(140,31,31)',
              borderWidth: '0.02rem',
            }
            } placeholder='Password'
              >
              
              </input>

              <Box>
               {error}  
              </Box> 
            
              <button style={{padding: '0.9rem', border:'none', borderRadius: '0.5rem', color: 'white', backgroundColor: 'rgb(140,31,31)', cursor: 'pointer'}}>
                Login
              </button>
              
            </Box>

            </Box>
       </Box>
    </>
  )
}

export default Index