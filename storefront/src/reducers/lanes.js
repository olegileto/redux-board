import {FETCH_ALL_LANES_SUCCESS, FETCH_ALL_LANES_REQUEST, FETCH_ALL_LANES_ERROR} from '../actions/constants';

const initialState = {
    lanes: [],
    isLoading: false,
    error: false,
    modal: false
};

const lanes = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_LANES_REQUEST:
            return {...state, isLoading: true};

        case FETCH_ALL_LANES_SUCCESS:
            return {...state, lanes: action.payload, isLoading: false};

        case FETCH_ALL_LANES_ERROR:
            return {...state, error: true};

        default:
            return state;
    }
};

export default lanes;