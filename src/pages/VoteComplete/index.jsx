import React, {useEffect} from 'react'
import {Box, Typography} from '@mui/material'
import correct from './correct.gif'
import {store} from '../../store'
import CandidateDetailsAction from '../../actions/CandidateDetails';
import ClosePosition from '../../actions/ClosePosition';
import Firebase from '../../services';

function index() {
  useEffect(() => {
    setTimeout(() => {
      store.dispatch(CandidateDetailsAction(null))
      window.location.href = '/candidates';
    }, 4000);

  //condition determined --- ob
  // store.dispatch(ClosePosition({position: position, positionStatus: 'true'}))
 // console.log(store.getState().closePosition.position)

   closePresident()
   closeOrganizer()

  }, []);


  const closePresident = async () => {

    const position = store.getState().details.details.candidatePosition

    const user_mail = store.getState().auth.user

    //async function to effect change
  try {
    const firebase = new Firebase()
 
     const querySnapshot =  await firebase.db
       .collection('users')
       .where('schoolMail', '==', user_mail)
       .get();
 
       //ONg i am confused🤣😂
  
     if (!querySnapshot.empty && position === 'President') {
       const candidateDoc = querySnapshot.docs[0];
      //  console.log(candidateDoc.id);
      //  setDocID(candidateDoc.id);

      store.dispatch(ClosePosition({presidentVote: true}))
 
       // Update Firestore vote status document
       await firebase.db.collection('users').doc(candidateDoc.id).update({
         presidentVote: true,
       });

      
       
       console.log('Close success');
     } else {
       console.log('No id found with name');
     }
   } catch (error) {
     console.log('Error while updating president count: ', error);
   }
  }


  //close Organizer
  const closeOrganizer = async () => {

    const position = store.getState().details.details.candidatePosition

    const user_mail = store.getState().auth.user
    

    //async function to effect change
  try {
    const firebase = new Firebase()
 
     const querySnapshot =  await firebase.db
       .collection('users')
       .where('schoolMail', '==', user_mail)
       .get();
 
       //ONg i am confused🤣
  
     if (!querySnapshot.empty && position === 'Organizer') {
       const candidateDoc = querySnapshot.docs[0];
      //  console.log(candidateDoc.id);
      //  setDocID(candidateDoc.id);

      store.dispatch(ClosePosition({organizerVote: true}))
 
 
       // Update Firestore vote status document
       await firebase.db.collection('users').doc(candidateDoc.id).update({
         organizerVote: true,
       });

       console.log('Close success');
     } else {
       console.log('No id found with name');
     }
   } catch (error) {
     console.log('Error while updating president count: ', error);
   }
  }


  

  return (
   <>
   <Box display='grid' justifyContent='center' marginTop='10rem' >
     <Typography variant='h3' textAlign='center'>
     Vote Complete Thank You </Typography>

     <Box display='grid' justifyContent='center'>
     <img src={correct} width='100%' height='50%' style={{marginTop: '3rem'}}></img>
     </Box>
    
   </Box>
   </>
  )
}

export default index