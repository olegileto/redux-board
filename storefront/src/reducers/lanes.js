import {FETCHING_LANES, REQUESTED_LANES, ERROR_LANES} from '../actions/constants';

const initialState = {
    lanes: [],
    isLoading: false,
    error: false
};

const lanes = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED_LANES:
            return {...state, isLoading: true};

        case FETCHING_LANES:
            return {...state, lanes: action.payload, isLoading: false};

        case ERROR_LANES:
            return {...state, error: true};

        default:
            return state;
    }
};

export default lanes;