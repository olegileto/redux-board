import {FETCH_CARDS, REQUESTED_CARDS, ERROR_CARDS, CHANGE_CARD_LANE, FETCHING_LANES} from './constants';
import Services from "../services/services";

const services = new Services();

const fetchingCards = () => {
    return (dispatch) => {
        dispatch({
            type: REQUESTED_CARDS
        });

        services.getAllCards()
            .then((cards) => {
                dispatch({
                    type: FETCH_CARDS,
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

export {
    fetchingCards,
    changeCardLane
}