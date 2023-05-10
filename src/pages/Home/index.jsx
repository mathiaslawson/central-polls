import { Box, Typography, useMediaQuery } from '@mui/material'
import girl from '../../assets/LandingPage/img1.png'
import { Link } from 'react-router-dom'

import news from '../../assets/LandingPage/part2/news.png'
import secure from '../../assets/LandingPage/part2/secure.png'
import vote from '../../assets/LandingPage/part2/vote.png'
import graph from '../../assets/LandingPage/part4/picture6.png'
import how from '../../assets/LandingPage/part5/picture7.png'
import voting from '../../assets/LandingPage/part5/picture8.webp'

import Progressbar1 from '../../assets/LandingPage/part3/progressbar1'
import Progressbar2 from '../../assets/LandingPage/part3/progressbar2'
import Progressbar3 from '../../assets/LandingPage/part3/progressbar3'


function index() {
  const smallScreens = useMediaQuery('(min-width: 800px)')
  const part2styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'spaceBetween'
  }

  return (
    <>
      <Box padding='0rem'>
        <Box height='100vh' display='flex' justifyContent='space-between' justifySelf='center' position='relative' >
          <Box margin='4rem 4rem ' width='90%' >
            <Typography fontSize={smallScreens ? '3rem' : '2rem'} width='90%' fontWeight='bold'>
              Fast, Secured and
            </Typography>
            <Typography fontSize={smallScreens ? '3rem' : '2rem'} width='90%' fontWeight='bold' marginTop='-0.4rem'>
              Accessible Voting System
            </Typography>
            <Typography variant='h6' fontWeight='lighter' marginTop='2rem' width='90%' color='gray'>
              Voting made easy for you.This website is designed to ensure
              a secured voting session for every student.
            </Typography>

            <br />

            <button
              style={{
                border: 'none',
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

              } : { display: 'none' }
              }
            ></img>
          </Box>
        </Box>


        {/* PART TWO */}
        <Box
          backgroundColor='#8c1f1f'
          padding='5rem'
          color='white'
          textAlign='center'
        >
          <Box>
            <Typography variant='h3' fontWeight='bold' color='white'>our features</Typography>
            <Typography>A secured system that provides an easy way
              to vote at your comfort
            </Typography>
          </Box>

          <Box
            display='flex'
            sx={smallScreens ? { flexDirection: 'row' } : { flexDirection: 'column', gap: '2rem' }}
            justifyContent='space-evenly'
          >
            <Box
              {...part2styles}
            >
              <img src={secure} alt='secure image' />
              <Typography variant='h4' fontWeight='bold'>secured system</Typography>
              <Typography>With our sytem,<br /> your data is safe and secured</Typography>
            </Box>

            <Box
              {...part2styles}
            >
              <img src={vote} alt='vote image' />
              <Typography variant='h4' fontWeight='bold'>vote online</Typography>
              <Typography>with just a few clicks, <br />you can vote for your preferred candidates</Typography>
            </Box>

            <Box
              {...part2styles}
            >
              <img src={news} alt='news image' />
              <Typography variant='h4' fontWeight='bold'>real time results</Typography>
              <Typography>view real time voting results and<br /> score for each candidate</Typography>
            </Box>
          </Box>
        </Box>


        {/* PART 3 */}
        <Box
          padding='5rem'
          textAlign='center'
        >
          <Box
            paddingBottom='3rem'
          >
            <Typography variant='h3' fontWeight='bold' color='#8c1f1f'>monitor the voting process</Typography>
            <Typography>track the number of votes and voters with our real-time counter</Typography>
          </Box>

          <Box
            display='flex'
            sx={smallScreens ? { flexDirection: 'row' } : { flexDirection: 'column', gap: '2rem' }}
            alignItems='center'
            justifyContent='space-between'
          >

            <Box width='13rem'  >
              <Progressbar1 />
              <Typography variant='h6' fontWeight='bold'>number of students</Typography>
            </Box>
            <Box width='13rem'>
              <Progressbar2 />
              <Typography variant='h6' fontWeight='bold'>total number of votes</Typography>
            </Box>
            <Box width='13rem'>
              <Progressbar3 />
              <Typography variant='h6' fontWeight='bold'>number of registered candidates</Typography>
            </Box>
          </Box>
        </Box>


        {/* PART4 */}
        <Box
          display='flex'
          sx={smallScreens ? { flexDirection: 'row' } : { flexDirection: 'column', gap: '2rem' }}
          justifyContent='space-evenly'
          backgroundColor='#8c1f1f'
          padding='5rem'
          color='white'
          textAlign='center'
        >
          <Box
            sx={smallScreens ? {} : { display: 'none' }}>
            <img src={graph} />
          </Box>
          <Box>
            <Box marginTop='20%'>
              <Typography variant='h3' textTransform='capitalize'>view live result</Typography>
              <ul>
                <li><Typography>view live results of the elections instantly on our home page without logging in</Typography></li>
                <li><Typography textAlign='left'>you can also check the electoral candidates</Typography></li>
              </ul>
            </Box>

          </Box>

        </Box>

        {/* PART5 */}
        <Box padding='4rem'>
          <Box marginBottom='3rem'><Typography variant='h3' color='rgb(140,31,31)' textAlign='center'>How it works</Typography></Box>
          <Box
            display='flex'
            sx={smallScreens ? { flexDirection: 'row' } : { flexDirection: 'column', gap: '2rem' }}
            justifyContent='space-evenly'>
            <Box><img src={how} /></Box>
            <Box><img src={voting} /></Box>
          </Box>
        </Box>

      </Box>
    </>
  )
}

export default index