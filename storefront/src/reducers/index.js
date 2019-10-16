import {combineReducers} from "redux";

import lanes from "./lanes";
import cards from "./cards";

const rootReducer = combineReducers({
    lanes,
    cards
});

export default rootReducer;