import {CLOSE_POSITION} from '../constants/actionTypes'


const INITIAL_STATE = {
    presidentVote : null,
    organizerVote : null,
}


const ClosePositionReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case CLOSE_POSITION: 
        return {...state, position: action.payload};
   
        default: 
        return state;
    }
}

export default ClosePositionReducer;