import {FETCHING_LANES, REQUESTED_LANES, ERROR_LANES} from './constants';
import Services from "../services/services";

const services = new Services();

const fetchingLanes = () => {
    return (dispatch) => {
        dispatch({
            type: REQUESTED_LANES,
        });

        services.getAllLanes()
            .then((lanes) => {
                dispatch({
                    type: FETCHING_LANES,
                    payload: lanes
                })
            })
            .catch((err) => {
                dispatch({
                    type: ERROR_LANES,
                    payload: err
                })
            })
    }
};

export {
    fetchingLanes
}