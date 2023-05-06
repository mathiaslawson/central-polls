import {VOTE} from '../constants/actionTypes'

const INITIAL_STATE = {
    vote_count: null
}


const CandidateReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case VOTE: 
        return {...state, details: action.payload};
   
        default: 
        return state;
    }
}

export default CandidateReducer;