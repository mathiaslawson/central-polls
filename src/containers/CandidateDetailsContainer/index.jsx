import React from 'react'
import CandidateDetails from '../../pages/CandidateDetails'
import {store} from '../../store'

function index() {

    const fetchDetails = store.getState().details.details
    

  
  return (
    <>
       <CandidateDetails details={fetchDetails}/>
    </>
  )
}

export default index