import { Box, useMediaQuery, Typography, FormControl, MenuItem, Select } from '@mui/material';
import register from './register.png'
import { useState } from 'react';


function Index({onSubmit, onChange, department, error}) {

  const smallScreens = useMediaQuery('(min-width: 1200px)')

  const depts = [
    { value: '', text: 'Select your department' },
    { value: 'CSC', text: 'CSC', id: "CSC" },
    { value: 'Arts and Social Department(MIOTSO)', text: 'Arts and Social Department(MIOTSO)', id: 'AND' },
    { value: 'ATHE', text: 'ATHE', id: 'ATHE' },
    { value: 'LAW', text: 'LAW', id: 'LAW' },
    { value: 'Central Business School', text: 'Central Business School', id: 'CBS' },
    { value: 'School of Architecture and Design', text: 'School of Architecture and Design', id: 'SAD' },
    { value: 'School of Medicine And Health', text: 'School of Medicine And Health', id: 'SMH' },
    { value: 'School of Pharmacy', text: 'School of Pharmacy', id: 'SOF' },
    { value: 'Theology and Mission', text: 'Theology and Mission', id: 'TAH' },
    { value: 'Vision and Life', text: 'Vision and Life', id: "VAL" },
    { value: 'School of Engineering and Technology', text: 'School of Engineering and Technology', id: 'SET' }
  ]

  const [selected, setSelected] = useState(depts[0].value)
 


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
            onSubmit={onSubmit}
          >
            <input
            required
              onChange={onChange}
              // pattern='^[A-Z]{3}\/\d{2}\/\d{2}\/\d{4}$
              // '
              title='Please enter valid index number, eg.CSC/**/**/****'
              name='indexNumber'
              id='indexNumber'
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
            required
              onChange={onChange}
              pattern="^[a-zA-Z0-9._%+-]+@central\.edu\.gh$"
              title='Please enter a valid email address ending in central.edu.gh'
              name='schoolMail'
              id='schoolMail'
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
              required
                value={!department ? 'CSC' : department}
                onChange={onChange}
                name = 'department'
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
                {
                  depts.map((dept) => {
                    return (
                      <MenuItem key={dept.value} value={dept.value} id={dept.id}>{dept.text}</MenuItem>
                    )
                  })
                }

              </Select>
            </FormControl>

            <input
            required
               onChange={onChange}
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
            required
              onChange={onChange}
              name='confirmPassword'
              id='confirmPassword'
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


            <Typography color='red'>{error}.</Typography>
            

            {/* <Typography textTransform='capitalize' textAlign='center'>by clicking the sign in button</Typography>
            <Typography textTransform='capitalize' textAlign='center' color='rgb(140,31,31)' marginTop='-2rem'>terms and conditions</Typography> */}

            <button style={{padding: '0.9rem', border:'none', borderRadius: '0.5rem', color: 'white', backgroundColor: 'rgb(140,31,31)', cursor: 'pointer'}}>
              Register
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

export default Index