import {CANDIDATE_DETAILS} from '../constants/actionTypes'

const CandidateDetailsAction = (details) => {
    return {
        type: CANDIDATE_DETAILS,
        payload: details
    }
}

export default CandidateDetailsAction