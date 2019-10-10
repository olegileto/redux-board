import {combineReducers} from "redux";

import lanes from "./lanes";
import cards from "./cards";

const rootReducer = combineReducers({
    lanes: lanes,
    cards: cards
});

export default rootReducer;