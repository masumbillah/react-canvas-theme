//Redux types
import { planListSuccess, selectedPlan } from "../../types/services";

//Load Resource data from json file. It will be api or somethings else.
import planData from '../../resources/price.json';

//Start actions methods for fetching data by API
export const planList = () => {
    const plans = planData || [];
    
    return (dispatch) => {
          dispatch({
            type: planListSuccess,
            payload: plans
        })
    };
};

//Start actions methods for fetching data by API
export const selectPlan = (plan) => {
    const plans = planData || [];
    
    return (dispatch) => {
          dispatch({
            type: selectedPlan,
            plans,
            payload: plan
        })
    };
};


// Note: we are want to get data from api then using it.
// Here type is static and url for demo 

// return (dispatch) => {
//     dispatch({
//         type: 'PlansRequestType'
//     })

//     fetch('https://www.breakingbadapi.com/api/characters?limit=20').then(response => response.json())
//     .then(data => {
//         dispatch({
//             type: 'getPlansSuccessType',
//             payload: data
//         })
//     })
//     .catch((error) => {
//         dispatch({
//             type: 'getPlansFaildType',
//             payload: error.message
//         })
//     })
// };