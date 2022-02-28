/* eslint-disable import/no-anonymous-default-export */
// Redux types
import { planListSuccess} from "../../types/services";

// Redux initial state
const initialState = {
    loading: false,
    plans: [],
    error: ''
};

export default function (state = initialState, action) {
    switch(action.type) {
        case planListSuccess: 
            return {
                ...state,
                plans: action.payload,
                loading: false
            }
        default:
            return state    
    }
};