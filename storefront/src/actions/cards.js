import {FETCH_CARDS, REQUESTED_CARDS, ERROR_CARDS} from './constants';
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

export {
    fetchingCards
}