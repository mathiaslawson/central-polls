import React, { useEffect, useState } from 'react';
import Firebase from '../../services';
import { store } from '../../store';
import CandidateDetailsAction from '../../actions/CandidateDetails';

function Index() {
  const firebase = new Firebase();

  const [vote, setVote] = useState(1);
  const [docID, setDocID] = useState('');

  useEffect(() => {
    const details = store.getState().details.details;
    console.log(details.voteCount);
    setVote(details.voteCount);
  }, []);

  const handleYesClick = async () => {
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

  return (
    <div>
      <h1>Vote Name as President</h1>

      <div>
        <button onClick={handleYesClick}>Yes</button>
        <button>No</button>
        <p>Vote {vote}</p>
      </div>
    </div>
  );
}

export default Index;
