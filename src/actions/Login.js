import {LOGIN} from '../constants/actionTypes'

const Login = payload => {
    return {
        type: LOGIN,
        payload
    }
}

export default Login