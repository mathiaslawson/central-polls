import {REGISTER} from '../constants/actionTypes'

const Register = payload => {
    return {
        type: REGISTER,
        payload
    }
}

export default Register