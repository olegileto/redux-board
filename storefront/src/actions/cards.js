import {
    FETCH_ALL_CARDS,
    REQUESTED_CARDS,
    ERROR_CARDS,
    CHANGE_CARD_LANE,
    ADD_NEW_CARD,
    ERROR_NEW_CARD,
    DELETE_CARD,
    EDIT_CARD,
    REQUESTED_EDIT_CARDS,
    REQUESTED_ALL_CARDS
} from './constants';
import Services from "../services/services";

const services = new Services();

const fetchingCards = () => {
    return (dispatch) => {
        dispatch({
            type: REQUESTED_ALL_CARDS
        });

        services.getAllCards()
            .then((cards) => {
                dispatch({
                    type: FETCH_ALL_CARDS,
                    payload: cards
                })
            })
            .catch((err) => {
                dispatch({
                    type: ERROR_CARDS,
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
                    type: CHANGE_CARD_LANE,
                    payload: true
                });
            })
            .catch((err) => console.error(err))
    }
};

const addNewCard = (cardObj) => {
    return (dispatch) => {
        dispatch({
            type: REQUESTED_CARDS
        });

        services.addNewCard(cardObj)
            .then(() => {
                return services.getAllCards()
            })
            .then((cards) => {
                dispatch({
                    type: ADD_NEW_CARD,
                    payload: cards
                })
            })
            .catch((err) => {
                dispatch({
                    type: ERROR_NEW_CARD,
                    payload: err
                })
            })
    }
};

const deleteCardById = (cardObj) => {
    return (dispatch) => {
        dispatch({
            type: REQUESTED_CARDS
        });

        services.deleteCardById(cardObj)
            .then(() => {
                return services.getAllCards()
            })
            .then((cards) => {
                dispatch({
                    type: DELETE_CARD,
                    payload: cards
                })
            })
            .catch((err) => console.error(err));
    }
};

const editCardById = (cardObj) => {
    return (dispatch) => {
        dispatch({
            type: REQUESTED_EDIT_CARDS
        });

        services.editCardById(cardObj)
            .then(() => {
                return services.getAllCards()
            })
            .then((cards) => {
                dispatch({
                    type: EDIT_CARD,
                    payload: cards
                })
            })
            .catch((err) => console.error(err));
    }
};

export {
    fetchingCards,
    changeCardLane,
    addNewCard,
    deleteCardById,
    editCardById
}