import {CLOSE_POSITION} from '../constants/actionTypes'

const ClosePosition = (position) => {
    return {
        type: CLOSE_POSITION,
        payload: position
    }
}

export default ClosePosition