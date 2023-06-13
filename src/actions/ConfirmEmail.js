import {CONFIRMED_MAIL} from '../constants/actionTypes'

const ConfirmedMail = (mail) => {
    return {
         type: CONFIRMED_MAIL,
         payload: mail
    }
}

export default ConfirmedMail;