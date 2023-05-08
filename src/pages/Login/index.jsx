import {Box, useMediaQuery, Typography} from '@mui/material'
import login from './login.png'
import { ErrorSharp } from '@material-ui/icons';


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
              height='25vh'
              gap='2rem'
              marginTop={smallScreens && {marginTop: '10rem'}}
              onSubmit={onSubmit}
              component='form'
              marginLeft='-7rem'
              // sx={{overflow: 'auto'}}
            >
             
               <input 
                pattern="^[a-zA-Z0-9._%+-]+@central\.edu\.gh$"
                title='Please enter a valid email address ending in central.edu.gh'
                onChange= {onChange}
                name='email'
                id='email'
                required
               style={!smallScreens ? {
                padding: '1rem',
                border: 'none',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderColor: 'rgb(140,31,31)',
                borderWidth: '0.02rem'
              }: { 
              padding: '1rem',
              width: 'max-content',
              border: 'none',
              borderRadius: '0.5rem',
              borderStyle: 'solid',
              borderColor: 'rgb(140,31,31)',
              borderWidth: '0.02rem',
            }
            } placeholder='Student Mail'
              >
              </input>
               
               <Typography color='brown' marginTop='-1rem'>
                {}
               </Typography>

               <input 
               onChange= {onChange}
               name='password'
               id='password'
               type='password'
               required
               style={!smallScreens ? {
                padding: '1rem',
                border: 'none',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderColor: 'rgb(140,31,31)',
                borderWidth: '0.02rem'
              }: { 
                padding: '1rem',
                width: 'max-content',
                border: 'none',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderColor: 'rgb(140,31,31)',
                borderWidth: '0.02rem',
            }
            } placeholder='Password'
              >
              
              </input>

            <Box display='flex' >
              <Box>
               {error}  
              </Box> 
              </Box>            
              <button style={{padding: '0.9rem', border:'none', borderRadius: '0.5rem', color: 'white', backgroundColor: 'rgb(140,31,31)', cursor: 'pointer', width: 'max-content', marginLeft: '4rem'}} >
                Login
              </button>
              
            </Box>



            </Box>
       </Box>
    </>
  )
}

export default Index