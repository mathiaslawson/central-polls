import {VOTE} from '../constants/actionTypes'

const Vote = (vote_count) => {
    return {
         type: VOTE,
         payload : vote_count
    }
}

export default Vote