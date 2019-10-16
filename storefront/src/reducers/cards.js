import {
    FETCH_CARDS,
    REQUESTED_CARDS,
    ERROR_CARDS,
    CHANGE_CARD_LANE,
    ADD_NEW_CARD
} from '../actions/constants';

const initialState = {
    cards: [],
    isLoading: false,
    error: false,
    dragEvent: false
};

const cards = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARDS:
            return {...state, cards: action.payload, isLoading: false, dragEvent: false};

        case REQUESTED_CARDS:
            return {...state, isLoading: true};

        case ERROR_CARDS:
            return {...state, error: true};

        case CHANGE_CARD_LANE:
            return {...state, dragEvent: action.payload};

        case ADD_NEW_CARD:
            return {...state, cards: action.payload, isLoading: false, dragEvent: false};

        default:
            return state;
    }
};

export default cards;