// Packages
import { combineReducers } from "redux";

// Redux reducer
import planListReducer from "./planListReducer";
import modalReducer from "./modalRedecur";

export default combineReducers({
    planListReducer,
    modalReducer,
});