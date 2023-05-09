import React, {useState, useEffect} from 'react'
import Vote from '../../pages/Vote'
import Firebase from '../../services';
import {store} from '../../store'
import CandidateDetailsAction from '../../actions/CandidateDetails';
import {withRouter} from 'react-router-dom'
import { WindowRounded } from '@mui/icons-material';

function index() {
    const firebase = new Firebase();

    const [vote, setVote] = useState(1);
    const [docID, setDocID] = useState('');
  
    useEffect(() => {
      const details = store.getState().details.details; 
      setVote(details.voteCount);

    }, []);
  
    const handleYesClick = async () => {
    console.log("click")

      // Redux state update
      const newVote = vote + 1;
      setVote(newVote);
      const candidateDetails = store.getState().details.details;
      console.log(candidateDetails);
  
      const candidateName = store.getState().details.details.candidateName;
  
      // Query Doc ID
      try {
        const querySnapshot = await firebase.db
          .collection('candidates')
          .where('candidateName', '==', candidateName)
          .get();
  
        if (!querySnapshot.empty) {
          const candidateDoc = querySnapshot.docs[0];
          console.log(candidateDoc.id);
          setDocID(candidateDoc.id);
  
          // Update Firestore document
          await firebase.db.collection('candidates').doc(candidateDoc.id).update({
            voteCount: newVote,
          });
  
          console.log('Vote success');
        } else {
          console.log('No candidate found with name: ', candidateName);
        }
      } catch (error) {
        console.log('Error while updating vote count: ', error);
      }
      store.dispatch(
        CandidateDetailsAction({
          ...candidateDetails,
          voteCount: newVote,
        })
      );


    };


   //CandidateName
    const info = store.getState().vote.vote_count.candidateName


    //Different Candidate 
    const differentCandidate = () =>{
         window.location.href = "/candidates"
    }

    //Go back 
    const goBack = () =>{
        window.history.back()
    }
   


  return (
    <>
      <Vote handleYesClick={handleYesClick} candidateName={info} differentCandidate={differentCandidate}
      goBack = {goBack}
      />
    </>
  )
}

export default index