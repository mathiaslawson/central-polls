import {CANDIDATE_DETAILS} from '../constants/actionTypes'

const INITIAL_STATE = {
    details: null
}


const CandidateReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case CANDIDATE_DETAILS: 
        return {...state, details: action.payload};
   
        default: 
        return state;
    }
}

export default CandidateReducer;