import React, {useEffect, useState} from 'react'
import Candidates from '../../pages/Candidates'
import Firebase from '../../services'
import { store } from '../../store'
import CandidateDetailsAction from '../../actions/CandidateDetails'
import Login from '../../actions/Login'
import Vote from '../../actions/Vote'

function index() {

    const [candidates, setCandidates] = useState([])

    useEffect(()=>{

        const firebase = new Firebase()
        const collection = firebase.db.collection('candidates')
        const  candidates = collection.onSnapshot((querySnapshot)=>{
           const data = querySnapshot.docs.map((doc)=> doc.data());
           setCandidates(data)
          
        })
        return () => {
           candidates()
        }
      }, [])


      const fetchCandidateData = async (e) => {
         const firebase = new Firebase()
         const candidateRef = await firebase.db.collection('candidates')
         
         const  candidates = await candidateRef.onSnapshot((querySnapshot)=>{
            const data =  querySnapshot.docs.map((doc)=> doc.data());
            setCandidates(data)
          
            const candidateID = e.target.id
            try {
                   data.map((detail)=>{
                      if (detail.candidateName === candidateID) {
                        const {candidateName, candidateDepartment, candidatePosition,  candidatePromises, candidateLevel, candidateExperience, voteCount} = detail

               
                        // const {experienceDuration, experiencePosition} = candidateExperience

                        //Query Doc ID
                        firebase.db.collection('candidates').where('candidateName', '==', candidateName).get()
                        .then((querySnapshot)=>{
                           if(!querySnapshot.empty){
                              const candidateDoc = querySnapshot.docs[0]
                              console.log(candidateDoc.id)
                           }else{
                              console.log("eyy")
                           }
                        })
                         
                        const new_details = {
                            candidateName, candidateDepartment, candidatePosition, candidatePromises, candidateLevel, voteCount
                        }

                        console.log(voteCount)
                        //vote global state
                        const vote_detials = {
                           voteCount, candidateName
                        }
                   
                        store.dispatch(Vote(vote_detials)) 
                        store.dispatch(CandidateDetailsAction(new_details))  

                        

                        window.location.href='./candidate-details'       

                      }else{
                        return false
                      }
                   })
            }catch(error){
                 console.log(error)
            }
         })
         return () => {
            candidates()
         }
      }


  return (
    <>
      <Candidates candidates={candidates} onClick={fetchCandidateData}/>
    
    </>
  )
}

export default index