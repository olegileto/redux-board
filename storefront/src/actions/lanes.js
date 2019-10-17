import {
    FETCH_ALL_LANES_REQUEST,
    FETCH_ALL_LANES_SUCCESS,
    FETCH_ALL_LANES_ERROR
} from './constants';

import Services from "../services/services";

const services = new Services();

const fetchAllLanes = () => {
    return (dispatch) => {
        dispatch({
            type: FETCH_ALL_LANES_REQUEST,
        });

        services.getAllLanes()
            .then((lanes) => {
                dispatch({
                    type: FETCH_ALL_LANES_SUCCESS,
                    payload: lanes
                })
            })
            .catch((err) => {
                dispatch({
                    type: FETCH_ALL_LANES_ERROR,
                    payload: err
                })
            })
    }
};

export {
    fetchAllLanes
}