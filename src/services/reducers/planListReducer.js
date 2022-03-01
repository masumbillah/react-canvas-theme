/* eslint-disable import/no-anonymous-default-export */
// Redux types
import { planListSuccess, selectedPlan} from "../../types/services";

// Redux initial state
const initialState = {
    loading: false,
    plans: [],
    selectedPlan: {},
    error: ''
};

export default function (state = initialState, action) {
    switch(action.type) {
        case planListSuccess: 
            return {
                ...state,
                plans: action.payload,
                selectedPlan: {},
                loading: false
            }
        case selectedPlan: 
            return {
                ...state,
                plans: action.plans,
                selectedPlan: action.payload,
                loading: false
            }
        default:
            return state    
    }
};