import {LOGIN, LOGOUT} from '../constants/actionTypes'

const INITIAL_STATE = {
    user: null
}


const authReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case LOGIN: 
        return {...state, user: action.payload};

        case LOGOUT:
        return  {...state, user: action.payload};
     
        default: 
        return state;
    }
}

export default authReducer