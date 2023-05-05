import React, {useEffect, useState} from 'react'
import Candidates from '../../pages/Candidates'
import Firebase from '../../services'

function index() {

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
      <Candidates candidates={candidates}/>
    
    </>
  )
}

export default index