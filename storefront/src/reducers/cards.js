import {
    FETCH_ALL_CARDS,
    REQUESTED_CARDS,
    ERROR_CARDS,
    CHANGE_CARD_LANE,
    ADD_NEW_CARD,
    DELETE_CARD,
    EDIT_CARD,
    REQUESTED_EDIT_CARDS,
    REQUESTED_ALL_CARDS
} from '../actions/constants';

const initialState = {
    cards: [],
    isLoading: false,
    error: false,
    dragEvent: false
};

const cards = (state = initialState, action) => {
    const fetchData = {...state, cards: action.payload, isLoading: false, dragEvent: false};

    switch (action.type) {
        case FETCH_ALL_CARDS:
            return fetchData;

        case REQUESTED_ALL_CARDS:
            return {...state, isLoading: true};

        case REQUESTED_CARDS:
            return {...state, isLoading: true};

        case REQUESTED_EDIT_CARDS:
            return {...state, isLoading: true};

        case ERROR_CARDS:
            return {...state, error: true};

        case CHANGE_CARD_LANE:
            return {...state, dragEvent: action.payload};

        case ADD_NEW_CARD:
            return fetchData;

        case DELETE_CARD:
            return fetchData;

        case EDIT_CARD:
            return fetchData;

        default:
            return state;
    }
};

export default cards;