import React, {useEffect} from "react";
import CandidateDetails from "../../pages/CandidateDetails";
import CandidateDetailsAction from "../../actions/CandidateDetails";
import { store } from "../../store";
import Login from '../../actions/Login'

function index() {

  const fetchDetails = store.getState().details.details;

  const goBack = () => {
   window.location.href='/candidates'
   store.dispatch(CandidateDetailsAction(null))
  }

  return (
    <>
      <CandidateDetails details={fetchDetails} goBack={goBack}/>
    </>
  );
}

export default index;
