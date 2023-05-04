import React, {useEffect, useState} from 'react'
import { store } from '../../store'
import Logout from '../../actions/Logout'
import Firebase from '../../services'

function Candidates() {

  const [candidates, setCandidates] = useState([])

  useEffect(()=>{
    const firebase = new Firebase()
    const collection = firebase.db.collection('candidates')
    const  candidates = collection.onSnapshot((querySnapshot)=>{
       const data = querySnapshot.docs.map((doc)=> doc.data());
       setCandidates(data)
       console.log(data)
    })
    return () => {
       candidates()
    }
  }, [])

  return (
    <>
    <p>Welcome {store.getState().auth.user}</p>
    <button
    onClick={()=>{
       store.dispatch(Logout(null))
       window.location.href='./home'
    }}
    >Logout</button>
    <p>as</p>
    
    {/* Candidate INfo */}
    <p>Candidate Information From fireStore</p>
    <div>
           {
            candidates.map((member)=>( 
              <div key={member.candidateName}>    
               <p>{member.candidateName}</p>
               <p>{member.candidatePosition}</p>
               <p>{member.candidatePromises}</p>
               <p>{member.candidateSolgan}</p>
              </div>    
            ))
           }
           </div>
    </>
  )
}

export default Candidates