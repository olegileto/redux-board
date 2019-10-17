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
    EDIT_CARD_ERROR
} from './constants';

import Services from "../services/services";

const services = new Services();

const fetchAllCards = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_ALL_CARDS_REQUEST
        });

        services.getAllCards()
            .then((cards) => {
                dispatch({
                    type: FETCH_ALL_CARDS_SUCCESS,
                    payload: cards
                })
            })
            .catch((err) => {
                dispatch({
                    type: FETCH_ALL_CARDS_ERROR,
                    payload: err
                })
            })
    }
};

const changeCardLane = (laneId, cardObj) => {
    return (dispatch) => {
        services.changeCardsLaneId(laneId, cardObj)
            .then(() => {
                dispatch({
                    type: CHANGE_CARD_LANE_SUCCESS,
                    payload: true
                });
            })
            .catch((err) => {
                dispatch({
                    type: CHANGE_CARD_LANE_ERROR,
                    payload: err
                })
            })
    }
};

const addNewCard = (cardObj) => {
    return (dispatch) => {
        dispatch({
            type: ADD_NEW_CARD_REQUEST
        });

        services.addNewCard(cardObj)
            .then(() => {
                return services.getAllCards()
            })
            .then((cards) => {
                dispatch({
                    type: ADD_NEW_CARD_SUCCESS,
                    payload: cards
                })
            })
            .catch((err) => {
                dispatch({
                    type: ADD_NEW_CARD_ERROR,
                    payload: err
                })
            })
    }
};

const deleteCard = (cardObj) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_CARD_REQUEST
        });

        services.deleteCardById(cardObj)
            .then(() => {
                return services.getAllCards()
            })
            .then((cards) => {
                dispatch({
                    type: DELETE_CARD_SUCCESS,
                    payload: cards
                })
            })
            .catch((err) => {
                dispatch({
                    type: DELETE_CARD_ERROR,
                    payload: err
                })
            });
    }
};

const editCard = (cardObj) => {
    return (dispatch) => {
        dispatch({
            type: EDIT_CARD_REQUEST
        });

        services.editCardById(cardObj)
            .then(() => {
                return services.getAllCards()
            })
            .then((cards) => {
                dispatch({
                    type: EDIT_CARD_SUCCESS,
                    payload: cards
                })
            })
            .catch((err) => {
                dispatch({
                    type: EDIT_CARD_ERROR,
                    payload: err
                })
            });
    }
};

export {
    fetchAllCards,
    changeCardLane,
    addNewCard,
    deleteCard,
    editCard
}