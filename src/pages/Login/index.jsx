import {Box, useMediaQuery, Typography} from '@mui/material'
import login from './login.png'


function Index() {
  const smallScreens = useMediaQuery('(min-width: 1200px)');

  return (
    <>
       <Box 
       display='flex'
       justifyContent='space-between'
       marginTop='5vh'
       padding='2rem'
       width='100%'
       >
        {/* left */}
        <Box
         display='flex'
         justifyContent='center'
         gap={smallScreens && '6rem'}
         width='100%'
         sx={smallScreens ? {display: 'flex'}: {display: 'grid'}}
        >
            <Box
             display='grid'
            marginLeft='4rem'
            >
              <Typography variant='h2' fontWeight='bolder' color='#8c1f1f' fontFamily='calibri' fontSize='4rem'>
                  Login
              </Typography>
              <Typography variant='h3' fontFamily='calibri'>
              If you don't have an account
              you can <span style={{color: '#8c1f1f'}}>register here.</span>
              </Typography>
              <br />
              <br />
              <img src={login} alt='login image' style={smallScreens ? {width: '100%'}: {width: '80%'}}/>
            </Box>
            {/* right */}
            <Box
              display='grid'
              justifyContent='center'
              padding='4rem'
              height='10vh'
              gap='2rem'
              marginTop={smallScreens && {marginTop: '10rem'}}
            
            >
               <input style={!smallScreens ? {
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
            } placeholder='Student ID'
              >

              </input>

               <input style={!smallScreens ? {
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
            } placeholder='Student ID'
              >

              </input>
             
             
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