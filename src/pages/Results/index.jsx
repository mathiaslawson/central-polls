import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Firebase from '../../services';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Index() {
  const [results, setResults] = useState([]);
  const [organizer, setOrganizer] = useState([]);
  const [president, setPresident] = useState([])

  useEffect(() => {
    const firebase = new Firebase();
    const candidateRef = firebase.db.collection('candidates');
    const candidates = candidateRef.onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      setResults(data);
    });
  }, []);

  useEffect(() => {
    setOrganizer(
      results.filter((a) => {
        return a.candidatePosition === 'Organizer';
      })
    );
  }, [results]);

  
  useEffect(() => {
    setPresident(
      results.filter((a) => {
        return a.candidatePosition === 'President';
      })
    );
  }, [results]);

  const data = results;
  
  return (
    <>
      <Box marginTop='2rem'>
        <Box>
          <Typography display='grid' justifyContent='center' variant='h1'>
            Live Results
          </Typography>
        </Box>

        <Box display='flex' flexWrap='wrap' justifyContent='space-evenly' marginTop='5rem' gap='6rem'>
          <Box>
            <Box display='grid' justifyContent='center'>
                <Typography variant='h3'>Presidential Position</Typography>
            </Box>
            <BarChart width={760} height={700} data={president}>
              <CartesianGrid strokeDasharray='3 3' />

              <YAxis />
              <Tooltip />
              <Bar dataKey='voteCount' fill='#8884d8' />
              <XAxis dataKey='candidateName' />
            </BarChart>
          </Box>

          <Box>
          <Box display='grid' justifyContent='center'>
                <Typography variant='h3'>Organizer Position</Typography>
            </Box>
            <BarChart width={760} height={700} data={organizer}>
              <CartesianGrid strokeDasharray='2 2' />

              <YAxis />
              <Tooltip />
              <Bar dataKey='voteCount' fill='#8884d8' />
              <XAxis dataKey='candidateName' />
            </BarChart>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Index;
