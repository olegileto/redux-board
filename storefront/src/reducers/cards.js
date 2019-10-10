import {FETCH_CARDS, REQUESTED_CARDS, ERROR_CARDS} from '../actions/constants';

const initialState = {
    cards: [],
    isLoading: false,
    error: false
};

const cards = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARDS:
            return {...state, cards: action.payload, isLoading: false};

        case REQUESTED_CARDS:
            return {...state, isLoading: true};

        case ERROR_CARDS:
            return {...state, error: true};

        default:
            return state;
    }
};

export default cards;