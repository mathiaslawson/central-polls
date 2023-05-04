import {LOGOUT} from '../constants/actionTypes'

const Logout = (user) => {
    return {
         type: LOGOUT,
         payload: user
    }
}

export default Logout