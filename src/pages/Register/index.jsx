import { Box, useMediaQuery, Typography, FormControl, MenuItem, Select } from '@mui/material';
import register from './register.png'
import { useState } from 'react';


function index() {

  const smallScreens = useMediaQuery('(min-width: 1200px)')

  const depts = [
    { value: '', text: 'Select your department' },
    { value: 'CSC', text: 'CSC' },
    { value: 'Arts and Social Department(MIOTSO)', text: 'Arts and Social Department(MIOTSO)' },
    { value: 'ATHE', text: 'ATHE' },
    { value: 'LAW', text: 'LAW' },
    { value: 'Central Business School', text: 'Central Business School' },
    { value: 'School of Architecture and Design', text: 'School of Architecture and Design' },
    { value: 'School of Medicine And Health', text: 'School of Medicine And Health' },
    { value: 'School of Pharmacy', text: 'School of Pharmacy' },
    { value: 'Theology and Mission', text: 'Theology and Mission' },
    { value: 'Vision and Life', text: 'Vision and Life' },
    { value: 'School of Engineering and Technology', text: 'School of Engineering and Technology' }
  ]

  const [selected, setSelected] = useState(depts[0].value)

  const handleChange = (e) => {
    setSelected(e.target.value)
  }

  return (
    
      <Box
        display='flex'
        flexDirection='column'
        margin='2rem'
        padding='1rem'
        gap='2rem'
      >
        <Typography variant='h6' fontWeight='bolder' color='#8c1f1f' fontFamily='calibri' fontSize='3rem'>Welcome!!</Typography>
        <Typography textTransform='capitalize'>register as a voter on the CU voting platforms to vote for
          the candidate of your choice
        </Typography>

        {/* SECOND BOX CONTAINING BOTH FORM AND IMAGE */}
        <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        sx={smallScreens ? {flexDirection:'row-reverse'}
        : {flexDirection:'column-reverse'}}
        
        >

          {/* FORMS */}
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            gap='2rem'
            component='form'
            sx={smallScreens?{width:'22%'}:{width:'70%'}}
          >
            <input
              // onChange={onChange}
              name='idNumber'
              id='idNumber'
              placeholder='Enter your ID number'
              style={{
                padding: '1rem',
                border: 'none',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderColor: 'rgb(140,31,31)',
                borderWidth: '0.02rem'
              }}

              
                
              
            ></input>

            <input
              // onChange={onChange}
              name='email'
              id='email'
              placeholder='Enter your student e-mail'
              style={{
                padding: '1rem',
                border: 'none',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderColor: 'rgb(140,31,31)',
                borderWidth: '0.02rem'
              }}
            ></input>

            <FormControl>
              <Select
                value={selected}
                onChange={handleChange}
                style={{
                  padding: '1rem',
                  border: 'none',
                  borderRadius: '0.5rem',
                  borderStyle: 'solid',
                  borderColor: 'rgb(140,31,31)',
                  borderWidth: '0.02rem'
                }}
              >
                {
                  depts.map((dept) => {
                    return (
                      <MenuItem key={dept.value} value={dept.value}>{dept.text}</MenuItem>
                    )
                  })
                }

              </Select>
            </FormControl>

            <input
              // onChange={onChange}
              name='password'
              id='password'
              type='password'
              placeholder='Password'
              style={{
                padding: '1rem',
                border: 'none',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderColor: 'rgb(140,31,31)',
                borderWidth: '0.02rem'
              }}
            >
            </input>

            <input
              // onChange={onChange}
              name='Repassword'
              id='password'
              type='password'
              placeholder='Re-enter your Password'
              style={{
                padding: '1rem',
                border: 'none',
                borderRadius: '0.5rem',
                borderStyle: 'solid',
                borderColor: 'rgb(140,31,31)',
                borderWidth: '0.02rem'
              }}
            >
            </input>

            <Typography textTransform='capitalize' textAlign='center'>by clicking the sign in button</Typography>
            <Typography textTransform='capitalize' textAlign='center' color='rgb(140,31,31)' marginTop='-2rem'>terms and conditions</Typography>

            <button style={{padding: '0.9rem', border:'none', borderRadius: '0.5rem', color: 'white', backgroundColor: 'rgb(140,31,31)', cursor: 'pointer'}}>
              Sign In
            </button>



          </Box>

          <Box
          display='flex'
          justifyContent='center'
          sx={smallScreens?{width:'50%'}:{width:'100%'}}
          
          >
            <img
            src={register}
            style={smallScreens?
             {width:'70%'
            }
            :{width:'70%'}}
             />
          </Box>

        </Box>
      </Box>
    
  )
}

export default index