import {CONFIRMED_MAIL} from '../constants/actionTypes'


const INITIAL_STATE = {
    confirmedMail : null
}


const confirmedEmail = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case CONFIRMED_MAIL: 
        return {...state, position: action.payload};
   
        default: 
        return state;
    }
}

export default confirmedEmail;