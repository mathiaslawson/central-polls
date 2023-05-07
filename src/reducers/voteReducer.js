import {VOTE} from '../constants/actionTypes'

const INITIAL_STATE = {
    vote_count: 0
}


const CandidateReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case VOTE: 
        return {...state, vote_count: action.payload};
   
        default: 
        return state;
    }
}

export default CandidateReducer;