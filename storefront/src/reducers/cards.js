import {
    FETCH_ALL_CARDS_REQUEST,
    FETCH_ALL_CARDS_SUCCESS,
    FETCH_ALL_CARDS_ERROR,
    ADD_NEW_CARD_REQUEST,
    ADD_NEW_CARD_SUCCESS,
    ADD_NEW_CARD_ERROR,
    CHANGE_CARD_LANE_SUCCESS,
    CHANGE_CARD_LANE_ERROR,
    DELETE_CARD_REQUEST,
    DELETE_CARD_SUCCESS,
    DELETE_CARD_ERROR,
    EDIT_CARD_REQUEST,
    EDIT_CARD_SUCCESS,
    EDIT_CARD_ERROR,
    FILTER_CARDS_REQUEST,
    FILTER_CARDS_SUCCESS,
    FILTER_CARDS_ERROR
} from '../actions/constants';

const initialState = {
    cards: [],
    isLoading: false,
    error: false,
    dragEvent: false,
    dropZoneId: null
};

const cards = (state = initialState, action) => {

    const fetchData = {...state, cards: action.payload, isLoading: false, dragEvent: false, dropZoneId: null};
    const isError = {...state, error: true};
    const isLoading = {...state, isLoading: true};

    switch (action.type) {
        case FETCH_ALL_CARDS_REQUEST:
            return isLoading;

        case FETCH_ALL_CARDS_SUCCESS:
            return fetchData;

        case FETCH_ALL_CARDS_ERROR:
            return isError;

        case ADD_NEW_CARD_REQUEST:
            return isLoading;

        case ADD_NEW_CARD_SUCCESS:
            return fetchData;

        case ADD_NEW_CARD_ERROR:
            return isError;

        case DELETE_CARD_REQUEST:
            return isLoading;

        case DELETE_CARD_SUCCESS:
            return fetchData;

        case DELETE_CARD_ERROR:
            return isError;

        case EDIT_CARD_REQUEST:
            return isLoading;

        case EDIT_CARD_SUCCESS:
            return fetchData;

        case EDIT_CARD_ERROR:
            return isError;

        case CHANGE_CARD_LANE_SUCCESS:
            return {...state, dragEvent: action.payload.dragEvent, dropZoneId: action.payload.dropZoneId};

        case CHANGE_CARD_LANE_ERROR:
            return isError;

        case FILTER_CARDS_REQUEST:
            return isLoading;

        case FILTER_CARDS_SUCCESS:
            return fetchData;

        case FILTER_CARDS_ERROR:
            return isError;

        default:
            return state;
    }
};

export default cards;