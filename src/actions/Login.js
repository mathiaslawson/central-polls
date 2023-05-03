import {LOGIN} from '../constants/actionTypes'

const Login = (user) => {
    return {
        type: LOGIN,
         payload: user
    }
}

export default Login