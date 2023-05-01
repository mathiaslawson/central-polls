import {Box, Typography, useMediaQuery} from '@mui/material'
import girl from '../../assets/LandingPage/img1.png'



function index() {
  const smallScreens = useMediaQuery('(min-width: 800px)')

  return (
    <>
       <Box padding='0rem'>
            <Box height='100vh' display='flex' justifyContent='space-between' justifySelf='center' position='relative' >
              <Box margin='4rem 4rem ' width='90%' >
                <Typography fontSize={smallScreens ? '3rem': '2rem'} width='90%' fontWeight='bold'>
                  Fast, Secured and
                </Typography>
                <Typography fontSize={smallScreens ? '3rem': '2rem'} width='90%' fontWeight='bold' marginTop='-0.4rem'>
                  Accessible Voting System
                </Typography>
                <Typography variant='h6' fontWeight='lighter' marginTop='2rem' width='90%' color='gray'>
                Voting made easy for you.This website is designed to ensure
                a secured voting session for every student.
                </Typography>

                <br />

                <button
              style={{
                border:'none',
                padding: '0.8rem',
                borderRadius: '0.9rem',
                cursor: 'pointer',
                border: 'solid',
                borderColor: 'white', 
                backgroundColor: '#8c1f1f',
                borderWidth: '0.1rem',
                fontSize: '0.8rem',
                fontWeight: 'lighter',
                color: 'white',
                width: 'max-content',
                marginTop: '1.5rem',
                marginLeft: '-0.3rem'
              }}
            >
              Register as a Voter
            </button>
        
              </Box>
              <Box     
                 height='100vh'
                 overflow='hidden'
              >
                <img src={girl}
                style={smallScreens ? {
                   
                }: { display: 'none'}
              }
                ></img>
              </Box>
            </Box>
            <Box height='50vh'>b</Box>
            <Box height='50vh'>c</Box>
            <Box height='50vh'>d</Box>
       </Box>    
    </>
  )
}

export default index