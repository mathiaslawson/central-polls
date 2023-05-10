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

  const mainBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '5rem',
    gap: '3rem'
  }

  const part2styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'spaceBetween'
  }


  return (
    <>
      <Box padding='0rem'>

        {/* PART 1 */}
        <Box display='flex' justifyContent='space-between'>
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

            overflow='hidden'
          >
            <img src={girl}
            fetchpriority='high'
            style={smallScreens ? {

              } : { display: 'none' }
              }
            ></img>
          </Box>
        </Box>


        {/* PART TWO */}
        <Box
          {...mainBox}

          minHeight='50vh'
          backgroundColor='#8c1f1f'
          color='white'
          textAlign='center'


        >
          <Box>
            <Typography variant='h3' fontWeight='bold' color='white' fontSize={smallScreens ? '3rem' : '2rem'} >our features</Typography>
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
              <img src={secure} alt='secure image' fetchpriority='high' />
              <Typography variant='h4' fontWeight='bold'>secured system</Typography>
              <Typography>With our sytem,<br /> your data is safe and secured</Typography>
            </Box>

            <Box
              {...part2styles}
            >
              <img src={vote} alt='vote image' fetchpriority='high'  />
              <Typography variant='h4' fontWeight='bold'>vote online</Typography>
              <Typography>with just a few clicks, <br />you can vote for your preferred candidates</Typography>
            </Box>

            <Box
              {...part2styles}
            >
              <img src={news} alt='news image'  fetchpriority='high' />
              <Typography variant='h4' fontWeight='bold'>real time results</Typography>
              <Typography>view real time voting results and<br /> score for each candidate</Typography>
            </Box>
          </Box>
        </Box>


        {/* PART 3 */}
        <Box

          {...mainBox}

          textAlign='center'
          minHeight='50vh'
        >
          <Box>
            <Typography variant='h3' fontWeight='bold' color='#8c1f1f' fontSize={smallScreens ? '3rem' : '2rem'}>monitor the voting process</Typography>
            <Typography>track the number of votes and voters with our real-time counter</Typography>
          </Box>

          <Box
            display='flex'
            sx={smallScreens ? { flexDirection: 'row' } : { flexDirection: 'column', gap: '2rem' }}
            alignItems='center'
            justifyContent='space-evenly'

          >

            <Box>
              <Box width='13rem'  >
                <Progressbar1 />
                <Typography variant='h6' fontWeight='bold'>number of students</Typography>
              </Box>
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
            <img src={graph} fetchpriority='high' />
          </Box>
          <Box>
            <Box marginTop={smallScreens ? '10%' : '20%'}>
              <Typography variant='h3' textTransform='capitalize' fontSize={smallScreens ? '3rem' : '2rem'}>view live result</Typography>
              <ul>
                <li><Typography textAlign='left'>view live results of the elections instantly on our home page without logging in</Typography></li>
                <li><Typography textAlign='left'>you can also check the electoral candidates</Typography></li>
              </ul>
            </Box>

          </Box>

        </Box>

        {/* PART5 */}
        <Box padding='4rem'>
          <Box marginBottom='3rem'><Typography variant='h3' color='rgb(140,31,31)' textAlign='center' fontSize={smallScreens ? '3rem' : '2rem'}>How it works</Typography></Box>
          <Box
            display='flex'
            sx={smallScreens ? { flexDirection: 'row' } : { flexDirection: 'column', gap: '2rem' }}
            justifyContent='space-evenly'>
            <Box><img src={how} /></Box>
            <Box><img src={voting} /></Box>
          </Box>
        </Box>

      </Box >
    </>
  )
}

export default index