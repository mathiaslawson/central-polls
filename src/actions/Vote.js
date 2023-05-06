import {VOTE} from '../constants/actionTypes'

const Login = (vote_count) => {
    return {
         type: VOTE,
         payload: vote_count
    }
}

export default Login